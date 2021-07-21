// Libaries
import React from "react";
import styled from "styled-components";

// Assets
const Container = styled.div`
  margin: 1rem;
  width: 10rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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

function MapOption({ map }) {
  return (
    <Container>
      <Emoji>{map.emoji}</Emoji>
      <MapTitle>{map.title}</MapTitle>
    </Container>
  );
}

export default MapOption;
