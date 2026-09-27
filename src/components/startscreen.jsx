function StartScreen({ onStart }) {
  return (
    <div className="start-screen">

      <div className="start-content">

        <div className="game-icons">
          <div className="icon-card rock-card">
            ✊
          </div>

          <div className="icon-card paper-card">
            📄
          </div>

          <div className="icon-card scissor-card">
            ✂️
          </div>
        </div>

        <h1>
          Get Ready to
          <br />
          Duel!
        </h1>

        <p>
          Classic pass & play Rock Paper Scissors
          designed for two players with simple
          round-based gameplay and instant scoring.
        </p>

      </div>

      <div className="start-action">
        <button onClick={onStart}>
          START GAME
          <span>→</span>
        </button>
      </div>

    </div>
  );
}

export default StartScreen;