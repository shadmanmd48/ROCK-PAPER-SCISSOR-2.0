function FinalResult({
  player1Name,
  player2Name,
  player1Score,
  player2Score,
  onPlayAgain
}) {

  let result;


  if (player1Score > player2Score) {

    result = `${player1Name} Wins!`;

  } else if (player2Score > player1Score) {

    result = `${player2Name} Wins!`;

  } else {

    result = "It's a Draw!";

  }


  return (
    <div className="final-result-screen">

      <p className="screen-label">
        GAME OVER
      </p>


      <h1>
        FINAL RESULT
      </h1>


      <h2 className="final-winner">
        {result}
      </h2>


      <div className="final-score">

        <div className="final-player">

          <p>
            PLAYER 1
          </p>

          <h2>
            {player1Name}
          </h2>

          <strong>
            {player1Score}
          </strong>

        </div>


        <div className="final-divider">
          —
        </div>


        <div className="final-player">

          <p>
            PLAYER 2
          </p>

          <h2>
            {player2Name}
          </h2>

          <strong>
            {player2Score}
          </strong>

        </div>

      </div>


      <button
        className="play-again-button"
        onClick={onPlayAgain}
      >
        PLAY AGAIN
        <span>↻</span>
      </button>

    </div>
  );
}

export default FinalResult;