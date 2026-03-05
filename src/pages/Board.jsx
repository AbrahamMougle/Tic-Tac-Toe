import Square from "../component/Square";
import calculateWinner from "../utils/calculateWinner";
export default function Board({ squares, onPlay }) {
  const stateGame = calculateWinner(squares);

  return (
    <div>
      {stateGame && `Felicitation`}
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={() => onPlay(0)} />
        <Square value={squares[1]} onClickSquare={() => onPlay(1)} />
        <Square value={squares[2]} onClickSquare={() => onPlay(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={() => onPlay(3)} />
        <Square value={squares[4]} onClickSquare={() => onPlay(4)} />
        <Square value={squares[5]} onClickSquare={() => onPlay(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={() => onPlay(6)} />
        <Square value={squares[7]} onClickSquare={() => onPlay(7)} />
        <Square value={squares[8]} onClickSquare={() => onPlay(8)} />
      </div>
    </div>
  );
}
