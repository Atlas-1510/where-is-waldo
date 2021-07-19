// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-self: center;
  margin: 1rem;
`;

function Timer() {
  return (
    <Container>
      <h1>00:00</h1>
    </Container>
  );
}

export default Timer;
