// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import InfoBox from "../components/InfoBox";
import MapOption from "../components/MapOption";
import Button from "../components/Button";

// Firebase
import useFirestore from "../hooks/useFirestore";

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
  const { docs: maps } = useFirestore("maps");
  console.log(maps);
  return (
    <Container>
      <InfoBox>
        <SelectMap>Select map...</SelectMap>
        <MapsContainer>
          {maps.map((map) => (
            <Link
              key={map.id}
              to={{
                pathname: "/game",
                state: { map },
              }}
            >
              <MapOption map={map} />
            </Link>
          ))}
        </MapsContainer>
        <Button title={"Start"} />
      </InfoBox>
    </Container>
  );
}

export default PreGamePage;
