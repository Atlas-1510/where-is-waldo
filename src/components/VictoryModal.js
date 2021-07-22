// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import InfoBox from "./InfoBox";
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
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

function VictoryModal({ timerID }) {
  const timeElapsed = useEndTimer(timerID);

  return (
    <Container>
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
          <Button title={"View high scores"} />
        </div>
      </InfoBox>
    </Container>
  );
}

export default VictoryModal;
