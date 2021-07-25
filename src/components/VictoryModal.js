// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Modal from "./Modal";
import Button from "./Button";

// Hooks
import useEndTimer from "../hooks/useEndTimer";

const Container = styled.div`
  position: absolute;
  display: flex;
  min-height: 100%;
  min-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${"" /* background-color: rgba(0, 0, 0, 0.5); */}
  text-align: center;
`;

function VictoryModal({ timerID }) {
  const time = useEndTimer(timerID);

  return (
    <Container>
      <Modal>
        <h1>Time: {time}</h1>
        <form>
          <label htmlFor="highscore-name">
            Enter your name to save your score!
          </label>
          <input type="text" id="highscore-name" placeholder="Name"></input>
          <Button primary title={"Submit"} type="submit">
            Submit
          </Button>
        </form>
        <div>
          <Link exact to="/">
            <Button title={"Play Again"}>Play Again</Button>
          </Link>
          <Button title={"View high scores"}>High Scores</Button>
        </div>
      </Modal>
    </Container>
  );
}

export default VictoryModal;
