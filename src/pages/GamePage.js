// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import GameHeader from "../components/GameHeader";
import Image from "../components/Image";
import VictoryModal from "../components/VictoryModal";

// Hooks
import useStartTimer from "../hooks/useStartTimer";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

function GamePage({ location }) {
  const [targets, setTargets] = useState([]);
  const [victory, setVictory] = useState(false);
  const timerID = useStartTimer(location);
  const imageURL = location.state.map.storageURL;

  useEffect(() => {
    const initTargets = location.state.map.targets;
    const newTargets = initTargets.map((target) => {
      return { ...target, found: false };
    });
    setTargets(newTargets);
  }, [location]);

  useEffect(() => {
    if (targets.length !== 0) {
      if (targets.every((target) => target.found)) {
        console.log("victory!");
        setVictory(true);
      }
    }
  }, [targets]);

  return (
    <Container>
      {timerID && <GameHeader targets={targets} timerID={timerID} />}
      <Image imageURL={imageURL} targets={targets} setTargets={setTargets} />
      {victory && <VictoryModal timerID={timerID} />}
    </Container>
  );
}

export default GamePage;
