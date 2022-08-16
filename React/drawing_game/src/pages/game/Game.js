import "./Game.css";
import Canvas from "../../components/Canvas";
import Users from "../../components/Users";
import words from "../../data/words.json";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Answer from "../../components/Answer";

const Levels = (props) => {
  const [showWord, setShowWord] = useState();
  const [level, setLevel] = useState(0);
  const [scoreGame, setScoreGame] = useState(0);
  const [showButton, setshowButton] = useState(true)
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [reload, setReload] = useState(0);
  const firstPlayer = window.localStorage.getItem("first_player");
  const showPoint = localStorage.getItem("point");

  useEffect(() => {
    setReload(p => p + 1);
    window.localStorage.setItem("answer", correctAnswer)


  })



  { }
  const easy = () => {
    setShowWord(
      words.level_one[Math.floor(Math.random() * words.level_one.length)]
    );
    setshowButton(false)
    setLevel(1);


  };
  const medium = () => {
    setShowWord(
      words.level_two[Math.floor(Math.random() * words.level_one.length)]
    );
    setshowButton(false)

    setLevel(2);

  };
  const hard = () => {
    setShowWord(
      words.level_three[Math.floor(Math.random() * words.level_one.length)]

    );
    setshowButton(false)


    setLevel(3);

  };
  const nextWord = () => {
    if (level === 1) {
      setShowWord(
        words.level_one[Math.floor(Math.random() * words.level_one.length)]
      );
    }
    if (level === 2) {
      setShowWord(
        words.level_two[Math.floor(Math.random() * words.level_one.length)]
      );
    }

    if (level === 3) {
      setShowWord(
        words.level_three[Math.floor(Math.random() * words.level_one.length)]
      );
    }

  };



  const points = () => {
    window.localStorage.setItem("point", scoreGame)
    setCorrectAnswer('True')

    if (level === 1) {
      const point = 1;
      setScoreGame(parseInt(scoreGame) + point);
    }
    if (level === 2) {
      const point = 3;
      setScoreGame(parseInt(scoreGame) + point);
    }
    if (level === 3) {
      const point = 5;
      setScoreGame(parseInt(scoreGame) + point);
    }

  };
  const mistake = () => {
    setCorrectAnswer('False')
  }


  return (
    <section className="page_game">
      <h1>Welcome {firstPlayer}</h1>
      {showButton && (
        <div>

          <div className="levels">
            <h3>Easy: 3-4 letters</h3>
            <h3>Medium: 5 letters</h3>
            <h3>Hard: 6 or more letters</h3>
          </div>

          <button className="home_button" onClick={easy}>
            Easy
          </button>
          <button className="home_button" onClick={medium}>
            Medium
          </button>
          <button className="home_button" onClick={hard}>
            Hard
          </button>
          <hr />
          <br />
        </div>
      )
      }




      <div className="game">
        <div className="words">
          <h1>Words</h1>
          <h3> {showWord}</h3>
          <div className="button_word">
            <button onClick={nextWord}>Next word</button>
            <button onClick={points}>Good answer</button>
            <button onClick={mistake}>Wrong answer</button>
          </div>

          {Boolean(reload) && (
            <h3> Second Player answer:
              <Answer />
            </h3>
          )
          }
          <h3>Point</h3>
          <div className="point">{showPoint}</div>
        </div>

        <div className="canvas">
          <Canvas />
        </div>
        <div className="users">
          <Users />
        </div>
      </div>

    </section>
  );
};
export default Levels;
