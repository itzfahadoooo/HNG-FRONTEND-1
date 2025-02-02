import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import GameStatus from "./components/GameStatus/GameStatus";
import ScoreTracker from "./components/ScoreTracker/ScoreTracker";
import ColorDisplay from "./components/ColorDisplay/ColorDisplay";
import GameInstructions from "./components/GameInstructions/GameInstructions";
import ColorOptions from "./components/ColorOptions/ColorOptions";

const App = () => {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const startNewGame = (resetScore = true) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setColorOptions(colors.sort(() => 0.5 - Math.random()).slice(0, 6));
    if (resetScore) {
      setScore(0);
    }

    setGameStatus("");
  };

  const handleColorGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct!");
      setTimeout(() => {
        setGameStatus("");
        startNewGame(false);
      }, 1000);
    } else {
      setGameStatus("Wrong! Try again.");
      setTimeout(() => {
        setGameStatus("");
      }, 1000);
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);
  return (
    <div>
      <GameStatus status={gameStatus} />
      <ScoreTracker score={score} />
      <ColorDisplay targetColor={targetColor} />
      <GameInstructions />
      <ColorOptions
        colorOptions={colorOptions}
        onColorSelect={handleColorGuess}
      />

      <div className="reset-container">
        <button
          data-testid="newGameButton"
          onClick={() => startNewGame()}
          className="reset"
        >
          <h2>New Game</h2>
        </button>
      </div>
    </div>
  );
};

export default App;
