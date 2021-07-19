// Libraries
import React from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import Image from "../components/Image";
import VictoryModal from "../components/VictoryModal";

// Assets
import TestImage from "../images/Zalando-Festival-Map-No-Title-Final-2.jpg"; // TODO: Remove dummy image, load from firebase instead.

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

// TODO: Remove dummy targets
const DummyTargets = [
  {
    emoji: "👻",
    title: "ghost",
  },
  {
    emoji: "🥷",
    title: "ninja",
  },
  {
    emoji: "🦁",
    title: "lion",
  },
  {
    emoji: "🐻",
    title: "bear",
  },
  {
    emoji: "👩‍⚕️",
    title: "doctor",
  },
  {
    emoji: "🤡",
    title: "clown",
  },
  {
    emoji: "🧛‍♂️",
    title: "dracula",
  },
];

// TODO: Remove dumb victory flag
const victory = true;

function GamePage() {
  return (
    <Container>
      {!victory && <Header targets={DummyTargets} />}
      <Image image={TestImage} />
      {victory && <VictoryModal />}
    </Container>
  );
}

export default GamePage;
