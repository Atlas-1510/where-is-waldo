// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  @media (max-width: 600px) {
    margin: 0.2rem;
  }
`;

const Image = styled.img`
  height: 40px;

  @media (max-width: 600px) {
    height: 30px;
  }
`;

const Title = styled.h4`
  font-family: "Roboto", sans-serif;
  margin: 0.5rem 0 0 0;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

function Target({ target }) {
  const { name, image } = target;
  return (
    <Container>
      <Image src={image} />
      <Title>{name}</Title>
    </Container>
  );
}

export default Target;
