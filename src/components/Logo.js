// Libraries
import React from "react";
import styled from "styled-components";

// Assets
import waldoWave from "../img/waldo-wave.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const WaldoImage = styled.img`
  width: 6rem;

  @media (max-width: 600px) {
    width: 3rem;
  }
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  margin: 1rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Span = styled.span`
  color: ${(props) => props.color};
`;

function Logo() {
  return (
    <Container>
      <WaldoImage src={waldoWave} />
      <Title>
        <Span color="#8EB5CD">Where's </Span>{" "}
        <Span color="#D07681"> Waldo?</Span>
      </Title>
    </Container>
  );
}

export default Logo;
