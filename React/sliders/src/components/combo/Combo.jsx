import React, { useEffect, useRef, useState } from 'react';
import ComboBox from 'react-responsive-combo-box';
import { Button } from '@mui/material';
import 'react-responsive-combo-box/dist/index.css';
import "./style.css"


import Switch from '@mui/material/Switch';

function Combo({ users, showUser, hideUser, setShow, getUserNum }) {

    const [selectedOption, setSelectedOption] = useState();
    const [choosing, setChoosing] = useState();
    const [check, setCheck] = useState(false);
    const [showDisable, setShowDisable] = useState(true)
    const [hideDisable, setHideDisable] = useState(true)

    const getNum = () => {
        var options = []
        if (users != undefined) {
            options = [...Array.from({ length: users.length }, (_, i) => i + 1)]

        }
        return options
    }
    const [highlightedOption, setHighlightedOption] = useState("");
    useEffect(() => {


    }, [users])


    const onShow = () => {
        showUser(users[selectedOption - 1].user)
        setShowDisable(true)
        setHideDisable(false)

    }

    const onHide = () => {
        hideUser(users[selectedOption - 1].user)
        setShowDisable(false)
        setHideDisable(true)
    }
    const colorChange = () => {
        setShowDisable(true)
        setHideDisable(false)
    }




    return (
        <div className="combo_box">
            <div className='com_ch'>

                <ComboBox
                    options={getNum()}

                    placeholder='בחר מספר משתמש '
                    onOptionsChange={(option) => option}
                    enableAutocomplete
                    label="Age"
                    onSelect={(option) => { setSelectedOption(option); colorChange(); getUserNum(option) }}

                />

                {/* <ComboBox
                    placeholder='בחר מספר משתמש ' /> */}
                {/* <ComboBox
                    placeholder='בחר מספר משתמש '
                    onOptionsChange={(option) => option}
                    enableAutocomplete
                    label="Age"
                    onSelect={(option) => { setSelectedOption(option); colorChange(); getUserNum(option) }}
                // options={[...Array.from({ length: users.length }, (_, i) => i + 1)]}

                /> */}

            </div>
            <div className='button'  >


                <Button variant="contained" onClick={onShow} disabled={showDisable} >החזרת משתמש</Button>
                <span style={{ "marginLeft": "10px" }} />
                <Button variant="contained" onClick={onHide} disabled={hideDisable}>מחיקת משתמש</Button>

            </div>


        </div>
    )
}

export default Combo;
