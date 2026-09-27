function RoundSelection({ onStartGame }) {
  return (
    <div className="round-selection-screen">

      <div className="round-selection-content">

        <p className="screen-label">GAME SETUP</p>

        <h1>Choose Your Rounds</h1>

        <p className="screen-description">
          Decide how long the duel will last.
        </p>

        <div className="round-options">

          <button onClick={() => onStartGame(3)}>
            <span className="round-number">03</span>
            <span className="round-title">ROUNDS</span>
          </button>

          <button onClick={() => onStartGame(5)}>
            <span className="round-number">05</span>
            <span className="round-title">ROUNDS</span>
          </button>

          <button onClick={() => onStartGame(10)}>
            <span className="round-number">10</span>
            <span className="round-title">ROUNDS</span>
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoundSelection;