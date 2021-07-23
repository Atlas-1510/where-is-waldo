// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Components
import InfoBox from "./InfoBox";
import Button from "./Button";

// Hooks
import useEndTimer from "../hooks/useEndTimer";

// Firebase
import { firestore } from "../firebase/firebase";

function VictoryModal({ timerID, setScoresOpen, mapID, setVictoryModalOpen }) {
  const time = useEndTimer(timerID);

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    const title =
      e.target[0].value.length === 0 ? "Anonymous" : e.target[0].value;
    const newScore = {
      title,
      time: time,
    };

    firestore.collection(`maps/${mapID}/scores`).add(newScore);
    setScoresOpen(true);
    setVictoryModalOpen(false);
  };

  return (
    <InfoBox>
      <h1>Time: {time}</h1>
      <form onSubmit={handleScoreSubmit}>
        <label htmlFor="highscore-name">
          Enter your name to save your score!
        </label>
        <input type="text" id="highscore-name" placeholder="Name"></input>
        <Button title={"Submit"} type="submit" />
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
