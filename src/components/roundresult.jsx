function RoundResult({
  winner,
  player1Name,
  player2Name,
  player1Choice,
  player2Choice,
  currentRound,
  totalRounds,
  onNextRound
}) {

  let resultText;


  if (winner === "Draw") {

    resultText = "It's a Draw!";

  } else if (winner === "Player 1") {

    resultText = `${player1Name} Wins!`;

  } else {

    resultText = `${player2Name} Wins!`;

  }


  return (
    <div className="round-result">

      <p className="game-label">
        ROUND {currentRound} RESULT
      </p>


      <h1>
        {resultText}
      </h1>


      <div className="result-choices">

        <div>

          <p>{player1Name}</p>

          <strong>
            {player1Choice}
          </strong>

        </div>


        <div className="result-vs">
          VS
        </div>


        <div>

          <p>{player2Name}</p>

          <strong>
            {player2Choice}
          </strong>

        </div>

      </div>


      <button
        className="next-round-button"
        onClick={onNextRound}
      >

        {currentRound < totalRounds
          ? "NEXT ROUND →"
          : "SHOW FINAL RESULT →"}

      </button>

    </div>
  );
}

export default RoundResult;