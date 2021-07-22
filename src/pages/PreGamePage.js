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
      <RedWhiteBlueBackground />
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

// *** Red-White-Blue Background for pregame page below ***

const BGContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  position: absolute;
  width: 100%;
  height: 200%;
`;

const Colour = styled.div`
  background-color: ${(props) => props.color};
  height: 100%;
  box-shadow: -20px -10px 20px rgba(0, 0, 0, 0.3);
  transform: rotate(${(props) => props.rotation});
`;

function RedWhiteBlueBackground() {
  return (
    <BGContainer>
      <Colour color={"#a73946"} rotation={"45deg"} />
      <Colour color={"#d5858f"} rotation={"-45deg"} />
      <Colour color={"#a8dadc"} rotation={"45deg"} />
      <Colour color={"#1d3557"} rotation={"-45deg"} />
      <Colour color={"#5B2028"} rotation={"45deg"} />
      <Colour color={"#457b9d"} rotation={"-45deg"} />
    </BGContainer>
  );
}
