// Libraries
import React from "react";
import styled from "styled-components";

// Components
import InfoBox from "./InfoBox";
import Button from "./Button";

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

function VictoryModal() {
  return (
    <Container>
      <InfoBox>
        <h1>Time: 01:13</h1>
        <h1>Rank: 12th</h1>
        <h2>You were faster than 24% of players. Nice!</h2>
        <form>
          <label htmlFor="highscore-name">
            Enter your name to save your score!
          </label>
          <input type="text" id="highscore-name" placeholder="Name"></input>
        </form>
        <div>
          <Button title={"Play Again"} />
          <Button title={"View high scores"} />
        </div>
      </InfoBox>
    </Container>
  );
}

export default VictoryModal;
