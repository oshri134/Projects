import React, { useEffect, useState } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { SpecificProfileManipulation } from "./SpecificProfileManipulation";
import { calcUsersAcceptancePercentage } from "./calcUsersAcceptancePercentage";

import { config } from '../config';
import { languages } from '../languages';
import Combo from "./combo/Combo";




const GetUsersDataFromManipulation = (users, field) => {


    if (users !== undefined) {


        const state = users.reduce((store, user) => {

            const userId = user.user

            const currentManipulationUserData = user.profileManipulation[field]
            if (currentManipulationUserData.length === 0) {

                return store

            }
            store[userId] = { type: field, bid: currentManipulationUserData[0].bid, value: currentManipulationUserData[0].value }

            return store



        }, {})

        return state;
    }
};



export const ExperimentManipulation = (props) => {

    const [budget, setBudget] = useState();
    const [manipulation, setManipulation] = useState([]);
    const [profileManipulationKeys, setProfileManipulationKeys] = useState([]);
    const [bidsInfo, setBidsInfo] = useState();

    const [profileBids, setProfileBids] = useState({ male: 0 });
    const [usersAgreePercent, setUsersAgreePercent] = useState({
        gender: { "female": 0, "male": 0, "other": 0 },
        age: { "18-24": 0, "25-34": 0, "35-44": 0, "45-54": 0, "55-64": 0, "65+": 0 },
        marital: { "single": 0, "in a relationship": 0, "married": 0 },
        children: { "none": 0, "toddlers": 0, "elementary school": 0, "teenagers": 0, "adults": 0 },
        education: { "none": 0, "high school": 0, "college": 0, "doctorate degree": 0 },
        interests: {
            "Arts & Entertainment": 0, "Autos & Vehicles": 0, "Beauty & Fitness": 0, "Books & Literature": 0,
            "Business & Industrial": 0, "Computers & Electronics": 0, "Finance": 0, "Food & Drink": 0, "Games": 0, "Health": 0,
            "Hobbies & Leisure": 0, "Home & Garden": 0, "Internet & Telecom": 0, "Jobs & Education": 0, "Law & Government": 0,
            "News": 0, "Online Communities": 0, "People & Society": 0, "Pets & Animals": 0, "Real Estate": 0, "Reference": 0,
            "Science": 0, "Shopping": 0, "Sports": 0, "Travel & Transportation": 0, "World Localities": 0
        },
        dynamicInterests: {
            "Arts & Entertainment": 0, "Autos & Vehicles": 0, "Beauty & Fitness": 0, "Books & Literature": 0,
            "Business & Industrial": 0, "Computers & Electronics": 0, "Finance": 0, "Food & Drink": 0, "Games": 0, "Health": 0,
            "Hobbies & Leisure": 0, "Home & Garden": 0, "Internet & Telecom": 0, "Jobs & Education": 0, "Law & Government": 0,
            "News": 0, "Online Communities": 0, "People & Society": 0, "Pets & Animals": 0, "Real Estate": 0, "Reference": 0,
            "Science": 0, "Shopping": 0, "Sports": 0, "Travel & Transportation": 0, "World Localities": 0
        }
    });



    const [bidsUserNum, setBidsUserNum] = useState(0);
    const [submitButtonStatus, setSubmitButtonStatus] = useState(false);
    const [minTotalConst, setMainTotalConst] = useState(0)
    const [totalConst, setTotalConst] = useState(0)
    const calcBrokerManipulationTotalCost = async (brokerManipulation) => {
        const usersMin = 1
        const usersMax = 100
        const usersRange = usersMax - usersMin
        const advertisersRange = brokerManipulation.max - brokerManipulation.min
        var totalCost = 0

        for (const user of props.manipulation.users) {

            let convertedBidToAdvScale = (((user.accumulatedBid - usersMax) * advertisersRange) / usersRange + brokerManipulation.min)
            totalCost += convertedBidToAdvScale

        }
        setTotalConst(totalCost)
        return totalCost;
    }

    useEffect(() => {

        const manipulationUser = (props.manipulation.users).map(a => {

            return (a);
        })

        setManipulation(manipulationUser)
        setBidsInfo(props.bidsInfo)
        calcBrokerManipulationTotalCost(props.manipulation.advertisersLimits)

        setMainTotalConst(props.manipulation.minTotalCost)
    }, [props.manipulation]);



    const [show, setShow] = useState(true)

    const [hiddenUser, setHiddenUser] = useState(() => {

        const visible = {};
        for (let user of manipulation) {
            visible[user.user] = true


        }

        return visible;

    })


    const showUser = (user_id) => {
        const new_hidden = { ...hiddenUser }
        new_hidden[user_id] = true;
        setHiddenUser(new_hidden);
    }

    const hideUser = (user_id) => {
        const new_hidden = { ...hiddenUser }

        new_hidden[user_id] = false;
        setHiddenUser(new_hidden);
    }



    const handleSliderChange = (keyBid, newValueBid) => {
        profileBids[keyBid] = newValueBid
        setProfileBids(state => ({ ...state }))

        handleChange()
    }



    const handleChange = (newMaxUsers) => {

    }



    const GetUsersBid = (profileManipulation) => {


        if (Object.values(profileManipulation).length > 0) {

            const data = GetUsersDataFromManipulation(manipulation, `${profileManipulation}`);


            if (Object.keys(data).length === 0) {

                return null
            }


            return data;

        }
    };

    const gender = GetUsersBid('gender');
    const age = GetUsersBid('age');
    const marital = GetUsersBid('marital');
    const children = GetUsersBid('children');
    const education = GetUsersBid('education');
    const interests = GetUsersBid('interests');
    const dynamicInterests = GetUsersBid('dynamicInterests');



    const [userInformation, setUserInformation] = useState([])


    useEffect(() => {



        setUserInformation([
            { type: 'מגדר', usersBids: gender },
            { type: 'גיל', usersBids: age },
            { type: 'זוגיות', usersBids: marital },
            { type: 'ילדים', usersBids: children },
            { type: 'חינוך', usersBids: education },
            { type: 'תחומי עניין', usersBids: interests },
            { type: 'תחומי עניין נוכחיים (זמני) ', usersBids: dynamicInterests },

        ])


    }, [manipulation])

    const fullUserInfo = [
        { type: 'מגדר', usersBids: gender },
        { type: 'גיל', usersBids: age },
        { type: 'זוגיות', usersBids: marital },
        { type: 'ילדים', usersBids: children },
        { type: 'חינוך', usersBids: education },
        { type: 'תחומי עניין', usersBids: interests },
        {
            type: 'תחומי עניין נוכחיים (זמני) ', usersBids: dynamicInterests
        },

    ]

    useEffect(() => {


        const current_User_Info = [...fullUserInfo]

        for (let user of Object.keys(hiddenUser)) {

            for (let i = 0; i < current_User_Info.length; i++) {

                if (current_User_Info[i].usersBids !== null) {

                    if (hiddenUser[user] === false) {

                        delete current_User_Info[i].usersBids[user]

                    }

                }
            }
        }


        setUserInformation(current_User_Info)



    }, [hiddenUser])

    const handleNextAction = (event) => {
        props.callbackParent(undefined, true /* next */)
    }

    if (!manipulation) {
        return (<div style={{ textAlign: 'center', marginTop: '20%' }}><CircularProgress /></div>)
    }

    const getUserNum = num => {

        setBidsUserNum(num - 1);
    };



    const updateManipulation = () => {
        props.callbackParent(userInformation, true)
    }


    return (

        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" style={{ marginTop: "1%", marginRight: "-1%", marginLeft: "1%" }}>

            <Grid item xs={2}>
                <img style={{ width: "120%", height: "120%", marginLeft: "10%", marginTop: "50%" }} src={require(`../pictures/products/${props.imgNumber}.png`)} />
            </Grid>



            <Grid item xs={10}>
                <div classtype="button" >

                    {userInformation && <Combo users={manipulation} getUserNum={getUserNum} showUser={showUser} hideUser={hideUser} setShow={setShow} />}
                </div>
                <h3 style={{ "display": "flex", "alignItems": "center", "flexDirection": "row", "justifyContent": "center" }}>פיצוי מינימלי:<div style={{ "direction": "initial" }}>{minTotalConst.toFixed(2)}</div></h3>
                <h3 style={{ "display": "flex", "color": "red", "alignItems": "center", "flexDirection": "row", "marginBottom": "-3rem", "justifyContent": "center" }}>פיצוי מבוקש:<div style={{ "direction": "initial" }}>{totalConst.toFixed(2)}</div></h3>

                {
                    userInformation.map(sliderDetails => {


                        const userBids = sliderDetails?.usersBids && Object.entries(sliderDetails.usersBids).map(([userId, valBid]) => ({ [userId]: valBid?.bid }))
                        const usersAmount = sliderDetails?.usersBids && Object.keys(sliderDetails.usersBids)
                        return (
                            <div key={sliderDetails?.type}  >

                                {userBids && (<SpecificProfileManipulation className="sliders" name={sliderDetails.type} userBids={userBids} bidsUserNum={bidsUserNum} setUserInformation={setUserInformation} />)}

                            </div>
                        )
                    }

                    )}




            </Grid>


            <Grid container direction="row" justifyContent="space-around" alignItems="center" style={{ margin: "1.5%" }}>
                <Grid item xs={4} />
                <Grid item xs={1} style={{ textAlign: "right" }}>{props.processManipulation && <CircularProgress />}</Grid>
                <Grid item xs={5}>
                    {props.cost === 0 && <Typography variant="h5" style={{ color: "#3f51b5" }}>
                        {languages.zeroCost[config.language]}
                    </Typography>}
                    {(props.cost || props.cost === 0) && <Typography variant="subtitle1">{languages.resultsText[config.language]}</Typography>}

                    {(props.cost || props.cost === 0) && <Typography variant="subtitle1">{languages.nextHelp[config.language]}</Typography>}
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Grid item xs={2} />
                <Grid item xs={8} style={{ textAlign: "center" }}>
                    {<Button disabled={submitButtonStatus} onClick={updateManipulation} id="submitButton" variant="contained" style={{ width: 140 }}>
                        {languages.submitBtn[config.language]}
                    </Button>}
                </Grid>
                {/* <Grid item xs={2}>
                    {props.buttonValue !== languages.exitBtn[config.language] && <Button onClick={handleNextAction} variant="contained" style={{ width: 140, marginLeft: "20%" }}>
                        {props.buttonValue}
                    </Button>}
                </Grid> */}
            </Grid>
        </Grid>






        //                       {profileManipulationKeys.map(profileManipulationKey => (
        //                     manipulation.profileManipulation[profileManipulationKey].map((specificProfile) => (
        //                         previousProfileManipulationKey === profileManipulationKey ? specificProfileManipulationKey = '' : specificProfileManipulationKey = profileManipulationKey,
        //                         previousProfileManipulationKey = profileManipulationKey,
        //                         <SpecificProfileManipulation
        //                             key={specificProfile.value}
        //                             specificProfile={specificProfile}
        //                             profileManipulationKey={specificProfileManipulationKey}
        //                             usersAgreePercent={usersAgreePercent[profileManipulationKey][specificProfile.value]}
        //                             callbackParent={(keyBid, valueBid) => handleSliderChange(keyBid, valueBid)}
        //                             max={bidsInfo[profileManipulationKey][specificProfile.value].advertisers.max}
        //                             min={bidsInfo[profileManipulationKey][specificProfile.value].advertisers.min}
        //                         />
        //                     ))
        //                 ))}

        //                 <div style={{ textAlign: "center" }}>
        //                     <Typography variant="h3" style={{ color: "#3f51b5" }}>
        //                         {`${languages.budget[config.language]}: ${manipulation.budget.toFixed(1)}`} $
        //                     </Typography>
        //                 </div>
        //                 <Grid container justifyContent="center" alignItems="center" style={{ marginTop: "2%" }}>
        //                     <Grid item xs={3}>
        //                         <Typography variant="h5">{languages.requestedUsers[config.language]}</Typography>
        //                     </Grid>
        //                     <Grid item xs={1}>
        //                         <TextField
        //                             inputProps={{ style: { fontSize: "1.5rem", textAlign: "center", borderBottom: "3px solid #000" } }}
        //                             variant="standard"
        //                             type="number"
        //                             defaultValue={maxUsers}
        //                             onChange={(event) => handleChange(event.target.value)}
        //                         />
        //                     </Grid>

        //                     {(props.users || props.users === 0) &&
        //                         <Grid item xs={2} style={{ marginLeft: 120, marginRight: 120 }}>
        //                             <Typography variant="h5">{languages.users[config.language]}</Typography>
        //                         </Grid>}
        //                     {(props.users || props.users === 0) &&
        //                         <Grid item xs={1}>
        //                             <Typography variant="h5" style={{ border: "3px solid #9e9e9e", textAlign: "center" }}>{props.users}</Typography>
        //                         </Grid>}
        //                     {(props.users || props.users === 0) && <img style={{ width: 32, height: 32, marginLeft: "1%" }} src={require('../pictures/tick.png')} />}
        //                 </Grid>

        //                 <Grid container justifyContent="center" alignItems="center" style={{ marginTop: 40 }}>
        //                     <Grid item xs={3}>
        //                         <Typography variant="h5">{languages.calculatedCost[config.language]}</Typography>
        //                     </Grid>
        //                     <Grid item xs={1}>
        //                         <Typography id="maxCost" variant="h5" style={{ border: "3px solid #9e9e9e", textAlign: "center" }}>{maxCost.toFixed(1)} $</Typography>
        //                     </Grid>

        //                     {(props.cost || props.cost === 0) &&
        //                         <Grid item xs={2} style={{ marginLeft: 120, marginRight: 120 }}>
        //                             <Typography variant="h5">{languages.cost[config.language]}</Typography>
        //                         </Grid>}
        //                     {(props.cost || props.cost === 0) &&
        //                         <Grid item xs={1}>
        //                             <Typography variant="h5" style={{ border: "3px solid #9e9e9e", textAlign: "center" }}>{props.cost?.toFixed(1)} $</Typography>
        //                         </Grid>}
        //                     {(props.cost || props.cost === 0) && <img style={{ width: 32, height: 32, marginLeft: "1%" }} src={require('../pictures/tick.png')} />}
        //                 </Grid>

        //                 <Grid container direction="row" justifyContent="space-around" alignItems="center" style={{ margin: "1.5%" }}>
        //                     <Grid item xs={4} />
        //                     <Grid item xs={1} style={{ textAlign: "right" }}>{props.processManipulation && <CircularProgress />}</Grid>
        //                     <Grid item xs={5}>
        //                         {props.cost === 0 && <Typography variant="h5" style={{ color: "#3f51b5" }}>
        //                             {languages.zeroCost[config.language]}
        //                         </Typography>}
        //                         {(props.cost || props.cost === 0) && <Typography variant="subtitle1">{languages.resultsText[config.language]}</Typography>}

        //                         {(props.cost || props.cost === 0) && <Typography variant="subtitle1">{languages.nextHelp[config.language]}</Typography>}
        //                     </Grid>
        //                 </Grid>

        //                 <Grid container direction="row" justifyContent="space-around" alignItems="center">
        //                     <Grid item xs={2} />
        //                     <Grid item xs={8} style={{ textAlign: "center" }}>
        //                         {props.buttonValue === languages.exitBtn[config.language] && <Button disabled={submitButtonStatus} onClick={updateManipulation} id="submitButton" variant="contained" style={{ width: 140 }}>
        //                             {languages.submitBtn[config.language]}
        //                         </Button>}
        //                     </Grid>
        //                     <Grid item xs={2}>
        //                         {props.buttonValue !== languages.exitBtn[config.language] && <Button onClick={handleNextAction} variant="contained" style={{ width: 140, marginLeft: "20%" }}>
        //                             {props.buttonValue}
        //                         </Button>}
        //                     </Grid>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
    )
}