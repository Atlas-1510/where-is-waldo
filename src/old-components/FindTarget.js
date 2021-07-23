// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  width: 2rem;
`;
// TODO: Change icon from div to img. Using placeholder emojis for now.
const Icon = styled.div`
  font-size: 2rem;
`;

const Title = styled.h4`
  margin: 0;
`;

function FindTarget({ target }) {
  const { emoji, title } = target;
  return (
    <Container>
      <Icon>{emoji}</Icon>
      <Title>{title}</Title>
    </Container>
  );
}

export default FindTarget;
