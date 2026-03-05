import { useState } from "react";
import Board from "./pages/Board";
import calculateWinner from "./utils/calculateWinner.js";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [play, setPlay] = useState(true);
  const currentSquares = history[history.length - 1];
  function handlePlay(index) {
    const newtab = [...currentSquares];
    if (newtab[index]) {
      return;
    }
    play ? (newtab[index] = "x") : (newtab[index] = "0");
    setPlay((play) => !play);
    setHistory([newtab]);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
