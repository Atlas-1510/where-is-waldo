// Libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import GameHeader from "../components/GameHeader";
import Image from "../components/Image";
import VictoryModal from "../components/VictoryModal";

// Firebase
import { timeStamp, firestore } from "../firebase/firebase";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

function GamePage({ location }) {
  const [targets, setTargets] = useState([]);
  const [victory, setVictory] = useState(false);
  const [timerID, setTimerID] = useState(null);
  const imageURL = location.state.map.storageURL;

  useEffect(() => {
    const initTargets = location.state.map.targets;
    const newTargets = initTargets.map((target) => {
      return { ...target, found: false };
    });
    setTargets(newTargets);

    (async () => {
      const docRef = await firestore.collection("timers").add({
        createdAt: timeStamp,
      });
      setTimerID(docRef.id);
    })();
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
      <GameHeader targets={targets} />
      <Image imageURL={imageURL} targets={targets} setTargets={setTargets} />
      {victory && <VictoryModal timerID={timerID} />}
    </Container>
  );
}

export default GamePage;
