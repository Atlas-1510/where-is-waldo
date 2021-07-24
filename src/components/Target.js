// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.5s ease;
  opacity: ${(props) => (props.found ? 0.5 : 1)};

  &&:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

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

function Target({ target, onClick }) {
  console.log(target);
  const { name, image } = target;
  return (
    <Container onClick={onClick} found={target.found}>
      <Image src={image} />
      <Title>{name}</Title>
    </Container>
  );
}

export default Target;
