import "./App.css";
import { useEffect, useState } from "react";
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

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColors = () => {
    const newTargetColor = generateRandomColor();
    const options = [newTargetColor];

    while (options.length < 6) {
      const newColor = generateRandomColor();
      if (!options.includes(newColor)) {
        options.push(newColor);
      }
    }

    return {
      targetColor: newTargetColor,
      options: options.sort(() => Math.random() - 0.5),
    };
  };

  const startNewGame = (resetScore = true) => {
    const { targetColor, options } = generateColors();
    setTargetColor(targetColor);
    setColorOptions(options);

    if (resetScore) {
      setScore(0);
    }

    setGameStatus("");
  };

  const handleColorGuess = (color) => {
    if (color === targetColor) {
      setScore((prevScore) => prevScore + 1);
      setGameStatus("Correct!");
      setTimeout(() => {
        setGameStatus("");
        startNewGame(false);
      }, 2000);
    } else {
      setGameStatus("Wrong! Try again.");
      setTimeout(() => {
        setGameStatus("");
      }, 2000);
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div>
      <video autoPlay loop muted className="video-background">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="title">Color Guessing Game</h1>

        <GameStatus data-testid="gameStatus" status={gameStatus} />
        <ScoreTracker data-testid="score" score={score} />
        <ColorDisplay data-testid="colorBox" targetColor={targetColor} />
        <GameInstructions data-testid="gameInstructions" />
        <ColorOptions
          data-testid="colorOption"
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
    </div>
  );
};

export default App;
