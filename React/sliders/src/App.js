import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@material-ui/core';

import axios from 'axios';

import { ExperimentsManipulation } from './components/ExperimentsManipulation';
import { Tutorial } from './components/Tutorial';
import { languages } from './languages';
import { config } from './config';

function App() {
  const [canStart, setCanStart] = useState(false);
  const [start, setStart] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [brokerManipulationIdLS, setBrokerManipulationIdLS] = useState();

  useEffect(() => {
    document.title = 'Databroker Research';
    if (window.innerHeight > window.innerWidth) {
      setIsPhone(true)
      window.screen.orientation.lock('landscape').then(
        success => console.log("s", success),
        failure => {
          alert(languages.portraitModeAlert[config.language])
        }
      );
    }

    setBrokerManipulationIdLS(window.localStorage.getItem(config.localStorageBrokerManipulationIdField))

    if (brokerManipulationIdLS != null) {
      setCanStart(true)
      setStart(true)
      return
    }

    axios.get(`${config.protocol}://${config.host}:${config.porty}/api/broker-manipulation/start`).then(response => {
      setCanStart(response.data.canStart)
    }).catch(error => {
      alert('There was an error! ' + error)
    })
  }, []);

  if (!brokerManipulationIdLS && !canStart) {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Typography style={{ margin: "10% 20% 2%" }} variant="body1">{languages.surveyEnded1[config.language].split("\n").map((i, key) => {
          if (i === "") {
            return (<div style={{ marginTop: "4%" }} key={key}>{i}</div>)
          } else {
            return (<div style={{ fontSize: "2rem" }} key={key}>{i}</div>)
          }
        })}
        </Typography>
        <div style={{ textAlign: 'center' }}><img src={require('./pictures/closed.gif')} /></div>
        <Typography style={{ marginLeft: "20%", marginTop: "2%", fontSize: "2rem" }} variant="body1">{languages.surveyEnded2[config.language]}</Typography>
      </div>
    )
  }
  return (
    <div style={{ overflowX: "hidden" }}>
      {!brokerManipulationIdLS && !start ?
        <div>
          <div style={{ textAlign: 'center', marginTop: "1.5%" }}><img src={require('./pictures/graduation-hat.png')} /></div>
          <Typography style={{ margin: "0 20% 1% 20%" }} variant="body1">{languages.fullDescription[config.language].split("\n").map((i, key) => {
            if (i === "") {
              return (<div style={{ marginTop: "2%" }} key={key}>{i}</div>)
            } else {
              return (<div key={key}>{i}</div>)
            }
          })}
          </Typography>
          <div style={{ textAlign: 'center' }}><Button style={{ width: 140 }} variant="contained" onClick={() => setStart(true)}>{languages.startBtn[config.language]}</Button></div>
        </div> :
        brokerManipulationIdLS == null ?
          <Tutorial /> :
          <ExperimentsManipulation isPhone={isPhone} />
      }
    </div>
  );
}

document.getElementsByTagName('html')[0].setAttribute("dir", languages.docDirection[config.language]);

export default App;
