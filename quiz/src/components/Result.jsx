import React from 'react';
import Navbar from "./Navbar";
import home from "../assets/home (2).png";
import retake from "../assets/retake.png";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../App.css";

export default function Result(props) {
  const { mode } = useContext(ThemeContext);
  const success = 'Well done! Your knowledge really shone through.';
  const failure = `No problem, let's try again !`;

  return (
    <div>
      <Navbar />

      <div>
        <h1 className='result_desc' style={{ color: "#FA3D3D" }}>{props.score > 3 ? success : failure}</h1>

        <div className='finalScore' style={{ color: mode ? "#FFFFFF" : "#000000" }}>{props.score} out of 5 questions were correct: &nbsp;
          <div className='final_per' style={{ color: "#FA3D3D" }}> {(props.score / 5) * 100}%</div>
        </div>

        <div id='resultPage_buttons'>
          <button className='home_button' onClick={props.displayHomeComp} >
            <img src={home} alt="home" className='home_Img' /> <h2 className='home'>Home</h2>
          </button>

          <button className='retake_button' onClick={props.displayQuizComp} >
            <img src={retake} alt="retake" className='retake_Img' /><h2 className='retake'>Retake</h2>
          </button>
        </div>
      </div>
    </div>
  );
}