import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import HomComp from "./components/HomComp";
import QuizComp from "./components/QuizComp";

export const ThemeContext = createContext();

function App() {
  const [mode, setDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [showHomeComp, setShowHomeComp] = useState(true);
  const [showQuizComp, setShowQuizComp] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode ? "#404040" : "white";
  }, [mode]);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const displayHomeComp = () => {
    setShowHomeComp(true);
    setScore(0);
    setShowQuizComp(false);
    setShowResult(false);
  };

  const displayQuizComp = () => {
    setShowHomeComp(false);
    setShowQuizComp(true);
    setShowResult(false);
    setScore(0);
  };

  const displayResult = () => {
    setShowResult(true);
    setShowQuizComp(false);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {showHomeComp && <HomComp displayQuizComp={displayQuizComp} />}
      {showQuizComp && (
        <QuizComp
          displayResult={displayResult}
          updateScore={updateScore}
          displayHomeComp={displayHomeComp}
        />
      )}
      {showResult && (
        <Result
          displayHomeComp={displayHomeComp}
          score={score}
          displayQuizComp={displayQuizComp}
        />
      )}
    </ThemeContext.Provider>
  );
}

export default App;
