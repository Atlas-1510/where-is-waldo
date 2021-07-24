// Libraries
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

// Components
import Header from "../components/Header";
import Logo from "../components/Logo";
import Button from "../components/Button";
import Footer from "../components/Footer";

// Hooks
import useFirestore from "../hooks/useFirestore";

// TODO: remove test image, pull from firebase
import levelOne from "../maps/level-1.jpg";
import levelTwo from "../maps/level-2.jpg";
import levelThree from "../maps/level-3.jpg";
import levelFour from "../maps/level-4.jpg";
import levelFive from "../maps/level-5.jpg";
import levelSix from "../maps/level-6.jpg";

//TODO: remove test targets, pull from firebase
import waldo from "../img/waldo.jpg";
import odlaw from "../img/odlaw.jpg";
import wenda from "../img/wenda.jpg";
import wizard from "../img/wizard.jpg";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f1faee;
`;

const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem 5rem 2rem 5rem;

  @media (max-width: 600px) {
    margin: 1rem;
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

  @media (max-width: 600px) {
    margin: 1rem;
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

// TODO: Replace hardcoded levels with firebase implementation
// const levels = [
//   {
//     image: levelOne,
//     title: "Level One",
//     targets: [
//       { name: "Waldo", image: waldo },
//       { name: "Odlaw", image: odlaw },
//       { name: "Wizard", image: wizard },
//     ],
//   },
//   {
//     image: levelTwo,
//     title: "Level Two",
//     targets: [{ name: "Waldo", image: waldo }],
//   },
//   {
//     image: levelThree,
//     title: "Level Three",
//     targets: [
//       { name: "Waldo", image: waldo },
//       { name: "Odlaw", image: odlaw },
//       { name: "Wenda", image: wenda },
//       { name: "Wizard", image: wizard },
//     ],
//   },
//   {
//     image: levelFour,
//     title: "Level Four",
//     targets: [
//       { name: "Waldo", image: waldo },
//       { name: "Odlaw", image: odlaw },
//     ],
//   },
//   {
//     image: levelFive,
//     title: "Level Five",
//     targets: [
//       { name: "Waldo", image: waldo },
//       { name: "Odlaw", image: odlaw },
//       { name: "Wenda", image: wenda },
//       { name: "Wizard", image: wizard },
//     ],
//   },
//   {
//     image: levelSix,
//     title: "Level Six",
//     targets: [{ name: "Waldo", image: waldo }],
//   },
// ];

function Home() {
  const { docs: levels } = useFirestore("levels", "level");
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <CardContainer>
        {levels.map((level) => (
          <Card key={level.title} level={level} />
        ))}
      </CardContainer>
      <LeaderBoardBanner>
        <Title>
          <Div color="#118ab2">Are you a Waldo expert?</Div>
          <Div color="#e63946">See the leaderboard</Div>
        </Title>
        <StyledButton primary>View Leaderboard</StyledButton>
      </LeaderBoardBanner>
      <Footer />
    </Container>
  );
}

export default Home;
