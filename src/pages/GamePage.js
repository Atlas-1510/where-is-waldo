// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import GameHeader from "../components/GameHeader";
import Image from "../components/Image";
import VictoryModal from "../components/VictoryModal";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

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
