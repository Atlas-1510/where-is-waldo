// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";

// Hooks
import useFirestore from "../hooks/useFirestore";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1faee;
`;

const ContentContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  max-width: 80%;
`;

const CardContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  width: 100%;
  margin: 2rem 0 2rem 0;

  @media (max-width: 900px) {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const LeaderBoardBanner = styled.div`
  background-color: white;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 10rem 2rem 10rem;
  border-radius: 15px;
  width: 100%;

  @media (max-width: 600px) {
    margin: 1rem;
  }

  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
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

const Div = styled.div`
  color: ${(props) => props.color};
`;

const StyledButton = styled(Button)`
  margin-right: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-right: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function Home() {
  const { docs: levels } = useFirestore("levels", "level");
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <ContentContainer>
        <CardContainer>
          {levels.map((level) => (
            <Card key={level.title} levelInfo={level} />
          ))}
        </CardContainer>
        <LeaderBoardBanner>
          <Title>
            <Div color="#118ab2">Are you a Waldo expert?</Div>
            <Div color="#e63946">See the leaderboard</Div>
          </Title>
          <StyledLink exact="true" to="/leaderboard">
            <StyledButton primary>View Leaderboard</StyledButton>
          </StyledLink>
        </LeaderBoardBanner>
      </ContentContainer>

      <Footer />
    </Container>
  );
}

export default Home;
