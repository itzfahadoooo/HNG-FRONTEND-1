import { useEffect } from "react";
import { useState } from "react";
import GameStatus from "./components/GameStatus/GameStatus";

const App = () => {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const startNewGame = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setColorOptions(colors.sort(() => 0.5 - Math.random()).slice(0, 6));
    setScore(0);
    setGameStatus("");
  };

  const handleColorGuess = (color) => {
    if (color === targetColor) {
      setScore(score + 1);
      setGameStatus("Correct!");
    } else {
      setGameStatus("Wrong! Try again.");
    }
  };

  useEffect(() => {
    startNewGame();
  }, []);
  return <div>
    <GameStatus gameStatus={gameStatus}/>
  </div>;
};

export default App;
