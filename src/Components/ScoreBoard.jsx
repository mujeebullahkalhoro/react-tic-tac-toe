import './ScoreBoard.css';
export default function ScoreBorad({score,resetScores}){

    return(
        <div className="Score-Container">
        <div className="box player-x score-box">
            <p> Player X </p>
            <p>{score.playerX}</p>
        </div>
        <div className="box draw score-box">
            <p> draw </p>
            <p>{score.draw}</p>
            </div>
        <div className="box player-o score-box">
            <p> Player O </p>
            <p>{score.playerO}</p>
            </div>
        </div>
    );
}