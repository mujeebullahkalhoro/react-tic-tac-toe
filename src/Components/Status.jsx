import './Status.css';
import { calculateWinner } from './Board';
export default function Status({ squares, next }) {
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  return (
    <div className="status">
      {winner ? `Winner: ${winner}` :
        isDraw ? `Draw!` :
        (next ? `Turn: X` : `Turn: O`)
      }
    </div>
  );
}
