// Libraries
import React from "react";
import styled from "styled-components";

// Components
import InfoBox from "../components/InfoBox";
import MapOption from "../components/MapOption";
import Button from "../components/Button";

const Container = styled.main`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MapsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

function PreGamePage() {
  return (
    <Container>
      <InfoBox>
        <h1>Select map...</h1>
        <MapsContainer>
          <MapOption emoji={"🎶"} title={"The Best Festival Ever"} />
          <MapOption emoji={"🔎"} title={"Classic Where's Waldo"} />
          <MapOption emoji={"🥳"} title={"Another placeholder here"} />
          <MapOption
            emoji={"🤬"}
            title={"Something with a really long title"}
          />
        </MapsContainer>
        <Button title={"Start"} />
      </InfoBox>
    </Container>
  );
}

export default PreGamePage;
