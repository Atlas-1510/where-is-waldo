// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import InfoBox from "./InfoBox";
import Button from "./Button";

// Hooks
import useEndTimer from "../hooks/useEndTimer";

function VictoryModal({ timerID, setScoresOpen }) {
  const timeElapsed = useEndTimer(timerID);

  return (
    <InfoBox>
      <h1>Time: {timeElapsed}</h1>
      <form>
        <label htmlFor="highscore-name">
          Enter your name to save your score!
        </label>
        <input type="text" id="highscore-name" placeholder="Name"></input>
      </form>
      <div>
        <Link exact to="/">
          <Button title={"Play Again"} />
        </Link>
        <Button title={"View high scores"} onClick={setScoresOpen} />
      </div>
    </InfoBox>
  );
}

export default VictoryModal;
