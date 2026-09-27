function Rules({ onContinue }) {
  return (
    <div className="rules-screen">

      <div className="rules-content">

        <p className="screen-label">GAME RULES</p>

        <h1>How to Play</h1>

        <p className="screen-description">
          Choose your weapon and beat your opponent.
          The player with the most round wins wins the duel.
        </p>

        <div className="rules-list">

          <div className="rule-item">
            <div className="rule-number">01</div>

            <div className="rule-text">
              <h3>Rock beats Scissor</h3>
              <p>Rock breaks the scissors.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-number">02</div>

            <div className="rule-text">
              <h3>Paper beats Rock</h3>
              <p>Paper covers the rock.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-number">03</div>

            <div className="rule-text">
              <h3>Scissor beats Paper</h3>
              <p>Scissor cuts the paper.</p>
            </div>
          </div>

          <div className="rule-item">
            <div className="rule-number">04</div>

            <div className="rule-text">
              <h3>Same choice = Draw</h3>
              <p>Both players get no point.</p>
            </div>
          </div>

        </div>

        <p className="turn-note">
          Players take turns choosing their weapon.
        </p>

        <button
          className="continue-button"
          onClick={onContinue}
        >
          CONTINUE
          <span>→</span>
        </button>

      </div>

    </div>
  );
}

export default Rules;