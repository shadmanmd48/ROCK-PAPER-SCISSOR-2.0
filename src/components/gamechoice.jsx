function GameChoice({
  currentPlayer,
  player1Name,
  player2Name,
  onChoice
}) {
  const playerName =
    currentPlayer === 1
      ? player1Name
      : player2Name;

  return (
    <div className="game-choice">

      <p className="game-label">
        CURRENT TURN
      </p>

      <h2>
        {playerName}'s Turn
      </h2>

      <p className="choice-description">
        Choose your weapon
      </p>

      <div className="weapon-buttons">

        <button
          className="weapon-button rock"
          onClick={() => onChoice("Rock")}
        >
          <span className="weapon-icon">
            ✊
          </span>

          <span>
            ROCK
          </span>
        </button>

        <button
          className="weapon-button paper"
          onClick={() => onChoice("Paper")}
        >
          <span className="weapon-icon">
            📄
          </span>

          <span>
            PAPER
          </span>
        </button>

        <button
          className="weapon-button scissor"
          onClick={() => onChoice("Scissor")}
        >
          <span className="weapon-icon">
            ✂️
          </span>

          <span>
            SCISSOR
          </span>
        </button>

      </div>

    </div>
  );
}

export default GameChoice;