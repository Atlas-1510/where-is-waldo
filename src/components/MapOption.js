// Libaries
import React from "react";
import styled from "styled-components";

// Assets
const Container = styled.div`
  background-color: lightgreen;
  margin: 1rem;
  width: 10rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${"" /* justify-content: space-around; */}
  text-align: center;

  @media (max-width: 600px) {
    width: 30vw;
    min-height: 50vw;
  }
`;

const Emoji = styled.div`
  font-size: 4rem;
`;

const MapTitle = styled.h4`
  margin: 1rem;
  padding: 0;
`;

function MapOption({ emoji, title }) {
  return (
    <Container>
      <Emoji>{emoji}</Emoji>
      <MapTitle>{title}</MapTitle>
    </Container>
  );
}

export default MapOption;
