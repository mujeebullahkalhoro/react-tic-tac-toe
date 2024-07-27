import { useState, useEffect } from "react";
import "./App.css";
import Board from "./Components/Board";
import Header from "./Components/Header";
import ScoreBoard from "./Components/ScoreBoard";
import Buttons from "./Components/Buttons";
import Status from "./Components/Status";
import { calculateWinner } from "./Components/Board";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [score, setScore] = useState({
    playerX: 0,
    draw: 0,
    playerO: 0,
  });

  useEffect(() => {
    calculateScore();
  }, [squares]);

  const calculateScore = () => {
    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every((square) => square !== null);

    if (winner && winner === "X") {
      setScore((currScore) => {
        return { ...currScore, playerX: currScore.playerX + 1 };
      });
    } else if (winner && winner === "O") {
      setScore((currScore) => {
        return { ...currScore, playerO: currScore.playerO + 1 };
      });
    } else if (isDraw) {
      setScore((currScore) => {
        return { ...currScore, draw: currScore.draw + 1 };
      });
    }
  };

  const handleNewGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const resetScores = () => {
    setScore({
      playerX: 0,
      draw: 0,
      playerO: 0,
    });
    handleNewGame();
  };

  return (
    <div className="app">
      <Header />

      <ScoreBoard score={score} resetScores={resetScores} />
      <Board
        xIsNext={xIsNext}
        squares={squares}
        setSquares={setSquares}
        setXIsNext={setXIsNext}
      />
      <Status squares={squares} next={xIsNext} />

      <div className="ButtonsBox">
      <Buttons name="Continue" className="btn1" handleClick={handleNewGame} />
      <Buttons name="Reset" className="btn1" handleClick={resetScores}></Buttons>
      </div>
      
    </div>
  );
}

export default App;
