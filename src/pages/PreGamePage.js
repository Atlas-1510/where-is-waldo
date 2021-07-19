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

const SelectMap = styled.h1`
  margin: 1rem;
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
        <SelectMap>Select map...</SelectMap>
        <MapsContainer>
          <MapOption emoji={"🎶"} title={"The Best Festival Ever"} />
          <MapOption emoji={"🔎"} title={"Classic Where's Waldo"} />
          <MapOption emoji={"🥳"} title={"Another placeholder here"} />
          <MapOption emoji={"🤬"} title={"Another option here"} />
        </MapsContainer>
        <Button title={"Start"} />
      </InfoBox>
    </Container>
  );
}

export default PreGamePage;
