// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import InfoBox from "../components/InfoBox";
import MapOption from "../components/MapOption";

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

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function PreGamePage() {
  const { docs: maps } = useFirestore("maps");
  return (
    <Container>
      <InfoBox>
        <SelectMap>Select map...</SelectMap>
        <MapsContainer>
          {maps.map((map) => (
            <StyledLink
              key={map.id}
              to={{
                pathname: "/game",
                state: { map },
              }}
            >
              <MapOption map={map} />
            </StyledLink>
          ))}
        </MapsContainer>
      </InfoBox>
    </Container>
  );
}

export default PreGamePage;
