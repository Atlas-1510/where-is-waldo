// Libraries
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

// Components
import Logo from "../components/Logo";

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

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
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

function Home() {
  const levels = [
    {
      image: levelOne,
      title: "Level One",
      targets: [waldo, odlaw, wizard],
    },
    {
      image: levelTwo,
      title: "Level Two",
      targets: [waldo],
    },
    {
      image: levelThree,
      title: "Level Three",
      targets: [waldo, odlaw, wenda, wizard],
    },
    {
      image: levelFour,
      title: "Level Four",
      targets: [waldo, odlaw],
    },
    {
      image: levelFive,
      title: "Level Five",
      targets: [waldo, odlaw, wenda, wizard],
    },
    {
      image: levelSix,
      title: "Level Six",
      targets: [waldo],
    },
  ];

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
    </Container>
  );
}

export default Home;
