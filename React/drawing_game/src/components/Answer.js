import React, { useEffect, useRef, useState } from "react";

const Answer = () => {
    const [guess, setGuess] = useState('')
    useEffect(() => {
        const guessAnswer = window.localStorage.getItem("guess");
        setGuess(guessAnswer)
    })


    return (

        <section>
            <h2>{guess}</h2>
        </section>
    )
}
export default Answer