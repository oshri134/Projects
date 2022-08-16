// import e from "express";
import React, { useEffect, useRef, useState } from "react";
import { PLAYER_TWO } from "../../../config/game.config";

import "./SecondPlayerGame.css";

const SecondPlayerGame = () => {
  const [guess, setGuess] = useState('');
  const [reload, setReload] = useState(0);
  const answer = window.localStorage.getItem("answer");

  useEffect(() => {
    window.localStorage.getItem("guess");
    window.localStorage.setItem("guess", guess);
    setReload(p => p + 1);


  })

  const secondPlayer = window.localStorage.getItem(PLAYER_TWO);
  const getImage = window.localStorage.getItem("img");
  const getScore = window.localStorage.getItem("point");

  const sendGuess = () => {
    try {
      window.localStorage.setItem("guess", guess);
      alert("Guess send")
    } catch (error) {
      alert(error)
    }
  };

  return (
    <section className="second_player_game">
      <h1>Welcome {secondPlayer}</h1>
      {Boolean(reload) && (
        <img src={getImage}></img>
      )
      }
      {answer === "True" ? (
        <h1 style={{ "color": "green" }}>
          Good answer
        </h1>
      ) : (
        <h1 style={{ "color": "red" }}>
          Worng answer
        </h1>
      )
      }
      <input onChange={(e) => setGuess(e.target.value)}></input>

      <button onClick={sendGuess}>Send the answer</button>
      {Boolean(reload) && (
        <h2>Your score is : {getScore}</h2>
      )
      }

    </section>
  );
};
export default SecondPlayerGame;
