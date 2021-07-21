// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

// Components
import GameHeader from "../components/GameHeader";
import Image from "../components/Image";
import VictoryModal from "../components/VictoryModal";

// Assets
// import TestImage from "../images/Zalando-Festival-Map-No-Title-Final-2.jpg"; // TODO: Remove dummy image, load from firebase instead.

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

// // TODO: Remove dummy targets
// const DummyTargets = [
//   {
//     emoji: "👻",
//     title: "ghost",
//   },
//   {
//     emoji: "🥷",
//     title: "ninja",
//   },
//   {
//     emoji: "🦁",
//     title: "lion",
//   },
//   {
//     emoji: "🐻",
//     title: "bear",
//   },
//   {
//     emoji: "👩‍⚕️",
//     title: "doctor",
//   },
//   {
//     emoji: "🤡",
//     title: "clown",
//   },
//   {
//     emoji: "🧛‍♂️",
//     title: "dracula",
//   },
// ];

// TODO: Remove dumb victory flag
const victory = false;

function GamePage({ location }) {
  const [targets, setTargets] = useState([]);
  useEffect(() => {
    const initTargets = location.state.map.targets;
    const newTargets = initTargets.map((target) => {
      return { ...target, found: false };
    });
    setTargets(newTargets);
  }, [location]);

  console.log(targets);

  const imageURL = location.state.map.storageURL;
  return (
    <Container>
      {!victory && <GameHeader targets={targets} />}
      <Image imageURL={imageURL} targets={targets} setTargets={setTargets} />
      {victory && <VictoryModal />}
    </Container>
  );
}

export default GamePage;
