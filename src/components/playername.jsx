import { useState } from "react";

function PlayerName({ onContinue }) {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div className="player-name-screen">

      <div className="player-name-content">
        <p className="screen-label">PLAYER SETUP</p>

        <h1>Choose Your Names</h1>

        <p className="screen-description">
          Enter the names of both players before starting the duel.
        </p>

        <div className="player-inputs">

          <div className="player-input-group">
            <label>PLAYER 1</label>

            <input
              type="text"
              placeholder="Enter player 1 name"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
            />
          </div>

          <div className="player-input-group">
            <label>PLAYER 2</label>

            <input
              type="text"
              placeholder="Enter player 2 name"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
            />
          </div>

        </div>

        <button
          className="continue-button"
          onClick={() => onContinue(player1Name, player2Name)}
        >
          CONTINUE
          <span>→</span>
        </button>

      </div>

    </div>
  );
}

export default PlayerName;