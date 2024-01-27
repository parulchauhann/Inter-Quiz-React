import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../App";
import questions from '../questions'
import React from 'react'

function QuizComp(props) {
    const [currentQues, setcurrentQues] = useState(0);
    const [highlight, setHighlight] = useState(false);

    // Function to handle button clicks and update the score
    const handleClick = (value) => {
        if (value) {
            props.updateScore(); // if the answer is correct, score increments
        }

        // either moves to another ques or display the result when the question is last
        currentQues !== questions.length - 1 ? setcurrentQues(currentQues + 1) : props.displayResult();
    };

    // Function for the highlighting
    const handleHighlight = () => {
        setHighlight(true);
    };

    // Function for removing highlight
    const handleRemoveHighlight = () => {
        setHighlight(false);
    };

    // Access the darkMode variable from the ThemeContext
    const { mode } = useContext(ThemeContext);

    return (
        <>
            <Navbar />

            <div id="quiz_playground">

                <div id="main_content">

                    <div id="quiz_container">

                        {/* Header section with question number and space */}
                        <div id="quesNo_section">
                            <div>

                                <h4>
                                    <span className="question_header">Question:</span> {currentQues + 1} of {questions.length}
                                </h4>

                            </div>
                            <div id="space"></div>
                        </div>

                        {/* Display the current question with optional highlight */}
                        <div>
                            <h4 id="the_question" style={{ color: highlight ? "red" : "inherit" }}>
                                {questions[currentQues].text}
                            </h4>
                        </div>

                        {/* Display the options for the current question */}
                        <div>
                            <ul>

                                {questions[currentQues].options.map((option) => (

                                    <div key={option.id}>

                                        <li >
                                            {/* Button for each op tion with styles */}
                                            <button className="options" onClick={() => handleClick(option.isCorrect)} >
                                                {option.text}
                                            </button>
                                        </li>

                                    </div>
                                ))}

                            </ul>
                        </div>

                        {/* Bottom buttons for highlighting and removing highlight */}
                        <div id="highlight_theme">

                            <button className="highlight" onClick={handleHighlight} style={{ backgroundColor: "#FA3D3D", color: highlight ? "#000000" : "#FFFFFF"}}>
                                Highlight
                            </button>

                            <button className="remove_highlight" onClick={handleRemoveHighlight} style={{color: "#FA3D3D" }}>
                                Remove Highlight
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default QuizComp