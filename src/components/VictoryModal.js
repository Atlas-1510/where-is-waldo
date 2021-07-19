// Libraries
import React from "react";
import styled from "styled-components";

// Components
import InfoBox from "./InfoBox";
import Button from "./Button";

const Container = styled.main`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function VictoryModal() {
  return (
    <Container>
      <InfoBox>
        <h1>Time: 01:13</h1>
        <h1>Rank: 12th</h1>
        <form>
          <label for="highscore-name">
            Enter your name to save your score!
          </label>
          <input type="text" id="highscore-name" placeholder="Name"></input>
        </form>
        <div>
          <Button title={"Play Again?"} />
          <Button title={"View high scores"} />
        </div>
      </InfoBox>
    </Container>
  );
}

export default VictoryModal;
