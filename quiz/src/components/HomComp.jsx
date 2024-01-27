import React, { useContext } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../App";

function HomComp(props) {
  const { mode } = useContext(ThemeContext);

  return (
    <>
      <Navbar />

      <div className="main_Content">
        <div className="welcome_text">
          <h1 style={{ color: mode ? "#FFFFFF" : "blue" }}>
            Welcome to Inter Quiz
          </h1>
        </div>

        <div className="description">
          <h2 style={{ color: mode ? "#FFFFFF" : "#010101" }}>
            Test your technical skills throughout the quiz.
          </h2>
        </div>

        <button id="start_button" onClick={props.displayQuizComp}>
          Start Quiz
        </button>
      </div>
    </>
  );
}

export default HomComp;
