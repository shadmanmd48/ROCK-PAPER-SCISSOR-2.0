import { useState } from "react";

import GameChoice from "./gamechoice";
import RoundResult from "./roundresult";
import FinalResult from "./finalresult";

function Game({ player1Name, player2Name, totalRounds }) {

  const [currentRound, setCurrentRound] = useState(1);

  const [currentPlayer, setCurrentPlayer] = useState(1);

  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [roundWinner, setRoundWinner] = useState("");

  const [showFinalResult, setShowFinalResult] = useState(false);


  function handleChoice(choice) {

    // PLAYER 1 CHOICE
    if (currentPlayer === 1) {

      setPlayer1Choice(choice);

      // Now Player 2 gets the turn
      setCurrentPlayer(2);

      return;
    }


    // PLAYER 2 CHOICE
    setPlayer2Choice(choice);


    // DRAW
    if (player1Choice === choice) {

      setRoundWinner("Draw");

      return;
    }


    // PLAYER 1 WINS
    if (
      (player1Choice === "Rock" && choice === "Scissor") ||
      (player1Choice === "Paper" && choice === "Rock") ||
      (player1Choice === "Scissor" && choice === "Paper")
    ) {

      setRoundWinner("Player 1");

      setPlayer1Score((score) => score + 1);

      return;
    }


    // PLAYER 2 WINS
    setRoundWinner("Player 2");

    setPlayer2Score((score) => score + 1);
  }


  function handleNextRound() {

    // More rounds remaining
    if (currentRound < totalRounds) {

      setCurrentRound((round) => round + 1);

      setCurrentPlayer(1);

      setPlayer1Choice("");
      setPlayer2Choice("");

      setRoundWinner("");

      return;
    }


    // No rounds remaining
    setShowFinalResult(true);
  }


  function handlePlayAgain() {
    window.location.reload();
  }


  // FINAL RESULT
  if (showFinalResult) {

    return (
      <FinalResult
        player1Name={player1Name}
        player2Name={player2Name}
        player1Score={player1Score}
        player2Score={player2Score}
        onPlayAgain={handlePlayAgain}
      />
    );
  }


  return (
    <div className="game-screen">

      {/* GAME HEADER */}

      <div className="game-header">

        <div className="round-info">

          <p>ROUND</p>

          <h2>
            {currentRound}
            <span> / {totalRounds}</span>
          </h2>

        </div>


        <div className="score-info">

          <p>SCORE</p>

          <h2>
            {player1Score}
            <span> — </span>
            {player2Score}
          </h2>

        </div>

      </div>


      {/* PLAYER INFORMATION */}

      <div className="players-section">

        <div
          className={
            currentPlayer === 1
              ? "player-card active-player"
              : "player-card"
          }
        >

          <p>PLAYER 1</p>

          <h2>{player1Name}</h2>

          {player1Choice && (
            <span>Choice selected ✓</span>
          )}

        </div>


        <div className="vs">
          VS
        </div>


        <div
          className={
            currentPlayer === 2
              ? "player-card active-player"
              : "player-card"
          }
        >

          <p>PLAYER 2</p>

          <h2>{player2Name}</h2>

          {player2Choice && (
            <span>Choice selected ✓</span>
          )}

        </div>

      </div>


      {/* GAME CHOICE */}

      {!roundWinner && (
        <GameChoice
          currentPlayer={currentPlayer}
          player1Name={player1Name}
          player2Name={player2Name}
          onChoice={handleChoice}
        />
      )}


      {/* ROUND RESULT */}

      {roundWinner && (
        <RoundResult
          winner={roundWinner}
          player1Name={player1Name}
          player2Name={player2Name}
          player1Choice={player1Choice}
          player2Choice={player2Choice}
          currentRound={currentRound}
          totalRounds={totalRounds}
          onNextRound={handleNextRound}
        />
      )}

    </div>
  );
}

export default Game;