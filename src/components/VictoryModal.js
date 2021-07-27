// Libraries
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Modal from "./Modal";
import Button from "./Button";

// Hooks
import useEndTimer from "../hooks/useEndTimer";

// Firebase
import { firestore } from "../firebase/firebase";

import Filter from "bad-words";
const filter = new Filter();

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 15px;
  border: 1px solid lightgrey;
  margin: 1rem;
`;

const Time = styled.span`
  font-size: 2rem;
  margin: 1rem;
`;

function VictoryModal({ timerID, levelID }) {
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const time = useEndTimer(timerID);

  const handleScoreSubmit = (e) => {
    e.preventDefault();
    let title =
      e.target[0].value.length === 0 ? "Anonymous" : e.target[0].value;
    if (filter.isProfane(title)) {
      title = "🤐";
    }
    const newScore = {
      title,
      time: time,
    };

    firestore.collection(`levels/${levelID}/scores`).add(newScore);
    setScoreSubmitted(true);
  };

  return (
    <Modal>
      <Time>Time: {time}</Time>
      {!scoreSubmitted && (
        <form onSubmit={handleScoreSubmit}>
          <div>Enter your name to save your score!</div>
          <label htmlFor="highscore-name"></label>
          <Input type="text" id="highscore-name" placeholder="Name"></Input>
          <Button primary title={"Submit"} type="submit">
            Submit
          </Button>
        </form>
      )}
      {scoreSubmitted && <h2>Score submitted!</h2>}
      <div>
        <Link exact="true" to="/">
          <Button title={"Play Again"}>Play Again</Button>
        </Link>
        <Link
          exact="true"
          to={{
            pathname: "/leaderboard",
            state: {
              levelID,
            },
          }}
        >
          <Button title={"View high scores"}>High Scores</Button>
        </Link>
      </div>
    </Modal>
  );
}

export default VictoryModal;
