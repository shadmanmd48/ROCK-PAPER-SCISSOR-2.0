import { useState } from "react";
import "./App.css";

import StartScreen from "./components/startscreen";
import PlayerName from "./components/playername";
import Rules from "./components/Rules";
import RoundSelection from "./components/Roundselection";
import Game from "./components/game";

function App() {
  const [screen, setScreen] = useState("start");

  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const [totalRounds, setTotalRounds] = useState(0);

  function handlePlayerNames(name1, name2) {
    setPlayer1Name(name1);
    setPlayer2Name(name2);
    setScreen("rules");
  }

  function handleRounds(numberOfRounds) {
    setTotalRounds(numberOfRounds);
    setScreen("game");
  }

  return (
    <>
      {screen === "start" && (
        <StartScreen
          onStart={() => setScreen("playerName")}
        />
      )}

      {screen === "playerName" && (
        <PlayerName
          onContinue={handlePlayerNames}
        />
      )}

      {screen === "rules" && (
        <Rules
          onContinue={() => setScreen("roundSelection")}
        />
      )}

      {screen === "roundSelection" && (
        <RoundSelection
          onStartGame={handleRounds}
        />
      )}

      {screen === "game" && (
        <Game
          player1Name={player1Name}
          player2Name={player2Name}
          totalRounds={totalRounds}
        />
      )}
    </>
  );
}

export default App;