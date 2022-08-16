import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import TooltipSlider, { handleRender } from "./slider/Toolki/TooltipSlider"
import Slider from 'rc-slider';
import "./style.css"
import { config } from '../config';
import { languages } from '../languages';
import SingleSlider from "./slider/SingleSlider"
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    margin: {
        height: theme.spacing(2),
    },
}));
//props.userBid=[{userId:bid}]
//
export const SpecificProfileManipulation = (props) => {

    const currentUseruuid = (props.userBids.map(valBid => Object.keys(valBid)[0]))[props.bidsUserNum]
    const [currentUserBid, setCurrentUserBid] = useState()
    const [bids, setBids] = useState(props.userBids)
    // const currentUserBid = Object.values((Object.values(props.userBids)[props.bidsUserNum]))[0]

    useEffect(() => {
        if (props.userBids !== undefined) {
            setBids(Object.values(props.userBids))
        }
    }, [props.userBids])

    useEffect(() => {
        setCurrentUserBid(Object.values((Object.values(props.userBids)[props.bidsUserNum]))[0])
    }, [currentUseruuid])
    const handleChange = (event, newValue) => setBids(event)

    const showUserNum = (numUser) => (numUser + 1)

    const updateFieldChanged = (newValue, e) => {


        props.setUserInformation(state => {
            return state.map(manipulation => {
                if (manipulation !== null) {
                    if (manipulation.type === props.name) {
                        if (!manipulation?.usersBids[currentUseruuid]) {
                            return manipulation
                        }

                        manipulation.usersBids[currentUseruuid].bid = newValue[0]




                        // console.log(manipulation.bids[currentUseruuid]);

                        // Object.entries(manipulation.bids).forEach(([userId, bidValue], index) => {
                        //     manipulation.bids[currentUseruuid] = newValue[0]
                        // })

                    }
                    return manipulation
                }
            })

        });
    }


    return (
        <div style={{ "marginRight": "4rem" }}>
            <span className="line" />
            <h1 className='title_main' style={{ "marginBottom": "4rem" }}>  {props.name} </h1>

            <Slider

                range
                style={{ "marginTop": "-1rem", "marginRight": "5rem", "width": "50vw", "marginBottom": "2rem" }}
                trackStyle={[{ backgroundColor: '#3f51b5' }]}
                max={100}
                RcSlider={true}
                railStyle={{ backgroundColor: '#3f51b5' }}
                activeDotStyle={{ left: 'unset' }}
                handleRender={handleRender}
                tabIndex="-1"
                value={(props.userBids).map(userBid => Object.values(userBid)[0])}
                onAfterChange={handleChange}


                disabled={true}
            />

            <div style={{ "marginTop": "4rem" }}>
                <h1 className='title' >משתמש : <span style={{ "marginLeft": "3px" }} />{showUserNum(props.bidsUserNum)}</h1>

                <div style={{ "marginTop": "-1rem", "marginRight": "5rem" }}>
                    <Slider
                        id={"slider"}
                        style={{ "width": "50vw" }}
                        range
                        trackStyle={[{ backgroundColor: '#3f51b5' }]}

                        handleRender={handleRender}
                        max={100}

                        RcSlider={true}
                        railStyle={{ backgroundColor: '#3f51b5' }}
                        activeDotStyle={{ left: 'unset' }}
                        // ariaLabelForHandle={Object.keys(hiddenUserChange)}
                        tabIndex="-1"
                        ariaLabelledByForHandle={bids}

                        onChange={e => setCurrentUserBid(e)}
                        value={currentUserBid}
                        onAfterChange={updateFieldChanged}
                        tipFormatter={value => `${value}%,${props.bidsUserNum}`}
                        ariaValueTextFormatterForHandle={(e) => {
                            "hello"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
//
//     
//    

//     useEffect(() => {
//         (async () => {
//             setSpecificProfile(props.specificProfile)
//             setProfileManipulationKey(props.profileManipulationKey)

//             props.callbackParent(props.specificProfile.value, props.specificProfile.bid)
//         })()
//     }, []);

//     if (!specificProfile) {
//         return (<div style={{ textAlign: 'center', marginTop: '20%' }}><CircularProgress /></div>)
//     }
//     const attribute = profileManipulationKey !== '' ?  languages.attributes[profileManipulationKey][config.language] : '';
//     return (
//         <div style={{ marginBottom: 30 }} >
//             <Typography variant="h5" style={{ fontWeight: 'bold', marginLeft: "7%" }}>{attribute}</Typography>

//             <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={6} style={{ marginLeft: "4%", marginTop: 8 }}>
//                 <Grid item xs={3}>
//                     <Typography variant="h6" style={{ textAlign: "center" }}>{languages.attributeValues[specificProfile.value][config.language]}</Typography>
//                 </Grid>

//                 <Grid item xs={5}>
//                     <Slider className={classes.root}
//                         key={specificProfile.value}
//                         defaultValue={Math.round(specificProfile.bid * 100) / 100}
//                         valueLabelDisplay="auto"
//                         step={0.01}
//                         min={Math.round(props.min * 100) / 100}
//                         max={Math.round(props.max * 100) / 100}
//                         onChange={(event, newValue) => props.callbackParent(specificProfile.value, newValue)}
//                     />
//                 </Grid>

//                 <Grid item xs={4}>
//                     <Typography variant="h6">{props.usersAgreePercent.toFixed(1)}{languages.usersAgreeToPrice[config.language]}</Typography>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }