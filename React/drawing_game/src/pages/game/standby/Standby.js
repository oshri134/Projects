import React, { Component, useEffect, useState } from "react";
import "./Standby.css"
import ReactPlayer from "react-player";
import waiting from "../../../assets/images/waiting.mp4";
import { Link } from "react-router-dom";

const Standby = () => {
    const [showWaiting, setShowWaiting] = useState(true)
    const [showButton, setShowButton] = useState(false)
    const secondPlayer = window.localStorage.getItem("second_player")
    useEffect(() => {
        if (secondPlayer !== null) {
            setShowWaiting(false)
            setShowButton(true)
        }
    }, [])
    return (
        <section>
            <div className="waiting">
                {showWaiting && (
                    <>

                        <h1>Waiting for the second player</h1>
                        <ReactPlayer
                            className="react-player fixed-bottom"
                            url={waiting}
                            width="100%"
                            height="100%"
                            loop={true}
                            playing={true}
                        />
                    </>
                )
                }
                {showButton && (
                    <button><Link to="/Game">Start game</Link></button>
                )

                }
            </div>
        </section>
    )
}

export default Standby