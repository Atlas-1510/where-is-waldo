// Libraries
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #d8f2cf;
  overflow: hidden;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const ImageContainer = styled.div`
  width: 375px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80vw;
    height: 200px;
  }
`;

const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

const LevelInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

const LevelTitle = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
`;

const TargetContainer = styled.div`
  display: flex;
`;

const TargetImage = styled.img`
  height: 30px;
  margin-left: 0.5rem;
`;

function Card({ level }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={level.image} />
      </ImageContainer>
      <LevelInfo>
        <LevelTitle>{level.title}</LevelTitle>
        <TargetContainer>
          {level.targets.map((target) => (
            <TargetImage key={target} src={target} />
          ))}
        </TargetContainer>
      </LevelInfo>
    </Container>
  );
}

export default Card;
