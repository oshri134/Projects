import React, { useEffect, useState, useRef } from "react";
import { AppBar, Typography, CircularProgress, Tooltip, Button, makeStyles } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import axios from "axios";

import { ExperimentManipulation } from "./ExperimentManipulation"
import { ExperimentCompleted } from "./ExperimentCompleted"
import { config } from '../config';
import { languages } from '../languages';

const useStyles = makeStyles({
  tooltip: {
    fontSize: "1.5em",
    maxWidth: 600
  },
});

export const ExperimentsManipulation = (props) => {

  const [manipulations, setManipulations] = useState();
  const [bidsInfo, setBidsInfo] = useState();
  const [buttonValue, setButtonValue] = useState(languages.exitBtn[config.language]);
  const [buttonColor, setButtonColor] = useState("red");

  const [experimentsNum, setExperimentsNum] = useState();
  const [experimentsIndex, setExperimentsIndex] = useState(1);

  const [openDialog, setOpenDialog] = React.useState(false);
  const [processManipulation, setProcessManipulation] = useState(false);
  const [cost, setCost] = useState();
  const [users, setUsers] = useState();
  const [imgShuffle, setImgShuffle] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);

  const classes = useStyles();



  const getAPI = async () => {
    var brokerManipulationIdLS = window.localStorage.getItem(config.localStorageBrokerManipulationIdField)
    if (brokerManipulationIdLS != null) {

      await axios.get(`${config.protocol}://${config.host}:${config.porty}/api/broker-manipulation/${brokerManipulationIdLS}`).then(response => {


        setManipulations(response.data)
        setExperimentsNum(response.data.manipulations.length)
        var experimentsIndexTemp = 1
        while (experimentsIndexTemp <= response.data.manipulations.length && 'results' in response.data.manipulations[experimentsIndexTemp - 1]) {
          experimentsIndexTemp++
        }
        setExperimentsIndex(experimentsIndexTemp)
      }).catch(error => {
        window.localStorage.removeItem(config.localStorageBrokerManipulationIdField);
        brokerManipulationIdLS = null;
        alert('There was an error! ' + error)
      })
    }

    if (brokerManipulationIdLS == null) {
      axios.post(`${config.protocol}://${config.host}:${config.porty}/api/broker-manipulation/start`).then(response => {

        setManipulations(response.data)
        setExperimentsNum(response.data.manipulations.length)

        window.localStorage.setItem(config.localStorageBrokerManipulationIdField, response.data._id);

        const queryStringParameters = Object.fromEntries(new URLSearchParams(window.location.search));
        axios.patch(`${config.protocol}://${config.host}:${config.porty}/api/broker-manipulation/${response.data._id}`,
          { hasCompleted: false, isFromMobileDevice: props.isPhone, queryStringParameters })
          .catch(error => {
            alert('There was an error! ' + error)
          })
      }).catch(error => {
        alert('There was an error! ' + error)
      })
    }


    axios.get(`${config.protocol}://${config.host}:${config.porty}/api/advertiser-manipulation/bids-info`).then(response => {
      setBidsInfo(response.data)
    }).catch(error => {
      alert('There was an error! ' + error)
    })

    for (let i = imgShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = imgShuffle[i]
      imgShuffle[i] = imgShuffle[j]
      imgShuffle[j] = tmp
    }
    setImgShuffle(imgShuffle)
  }


  useEffect(() => {
    getAPI()

  }, [])

  useInterval(() => {
    if (processManipulation) {


      axios.get(`${config.protocol}:${config.host}:${config.porty}/api/broker-manipulation/${manipulations._id}/experiment/${manipulations.manipulations[experimentsIndex - 1].experiment}`).then(response => {
        if (response.data.status === "finished") {
          setProcessManipulation(false)


        }
      }).catch(error => {
        alert('There was an error! ' + error)
      })
    }
  }, 2000);

  const handleExitAction = (event) => {
    setOpenDialog(!openDialog);
    if (event.target.innerText === languages.dialogActionsAgree[config.language]) {
      manipulations.hasExited = true
      setManipulations(state => ({ ...state }))
    }
  }
  const idManipulations = 0


  const handleSubmit = async (manipulation, next = false) => {
    const experimentID = manipulations.manipulations[experimentsIndex - 1].experiment
    const brokerManipulationIdLS = window.localStorage.getItem(config.localStorageBrokerManipulationIdField)
    console.log(manipulation);
    // const sumbitExperiment = await axios.post
    //   (`${config.protocol}://${config.host}:${config.porty}/api/broker-manipulation/${brokerManipulationIdLS}/experiment/${experimentID}`)
  }


  if (!manipulations || !bidsInfo) {
    return (<div style={{ textAlign: 'center', marginTop: '20%' }}><CircularProgress /></div>)
  }
  if (experimentsIndex > experimentsNum || manipulations.hasCompleted || manipulations.hasExited) {
    return (<ExperimentCompleted hasExited={manipulations.hasExited} />)
  }
  return (
    <div>
      <AppBar position="static" style={{ height: "100%" }}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" style={{ margin: 30 }}>
              {languages.advertiserCampaign[config.language]} {experimentsIndex}/{experimentsNum}
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip classes={{ tooltip: classes.tooltip }} title={languages.help[config.language].split("\n").map((i, key) => {
              if (i === "") {
                return (<div style={{ marginTop: "2%" }} key={key}>{i}</div>)
              } else {
                return (<div key={key}>{i}</div>)
              }
            })}>
              <Button style={{ boxShadow: 'none', backgroundColor: 'transparent' }} sx={{ m: 1 }} variant="contained">
                <img style={{ width: 60, height: 60 }} src={require('../pictures/question.png')} />
              </Button>
            </Tooltip>
          </Grid>
          <Grid item style={{ marginLeft: "1%" }}>
            <Button onClick={handleExitAction} variant="contained" style={{ color: "white", backgroundColor: "#bf0000", width: 80, marginLeft: "20%" }}>
              {languages.exitBtn[config.language]}
            </Button>
          </Grid>
          <Dialog open={openDialog} onClose={handleExitAction} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle>
              {languages.dialogTitle[config.language]}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleExitAction}>{languages.dialogActionsDisagree[config.language]}</Button>
              <Button onClick={handleExitAction} autoFocus>{languages.dialogActionsAgree[config.language]}</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </AppBar>

      {<ExperimentManipulation
        key={experimentsIndex - 1}
        budget={manipulations.manipulations[experimentsIndex - 1].budget}
        manipulation={manipulations.manipulations[experimentsIndex - 1]}
        processManipulation={processManipulation}
        buttonValue={buttonValue}
        buttonColor={buttonColor}
        bidsInfo={bidsInfo}
        imgNumber={imgShuffle[experimentsIndex - 1]}
        callbackParent={(manipulation, next) => handleSubmit(manipulation, next)}

        cost={cost}
        users={users}
      />}
    </div>
  )
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

