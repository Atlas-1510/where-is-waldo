// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Target from "../components/Target";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f1faee;
  min-height: 100%;
`;

const StyledHeader = styled(Header)`
  flex-direction: row;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const TargetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin-right: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  flex-grow: 1;
`;

const Image = styled.img`
  width: 100%;
`;

function Game({ location }) {
  const level = location.state.level;
  console.log(level);
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <TargetsContainer>
          {level.targets &&
            level.targets.map((target) => {
              return <Target target={target} key={target.name} />;
            })}
        </TargetsContainer>
      </StyledHeader>
      <ImageContainer>
        <Image src={level.image} />
      </ImageContainer>
      <Footer />
    </Container>
  );
}

export default Game;
