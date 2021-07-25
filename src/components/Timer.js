// Libraries
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

// Firebase
import { firestore } from "../firebase/firebase";

const Container = styled.div`
  align-self: center;
  margin: 1rem;
  position: fixed;
  right: 10px;
  top: 100px;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Time = styled.span`
  margin: 1rem;
`;

function Timer({ timerID, victory }) {
  const [elapsedTime, setElapsedTime] = useState("00:00:00");
  const cleanup = useCallback(() => {
    firestore.collection("timers").doc(timerID).delete();
  }, [timerID]);

  useEffect(() => {
    let startTime;
    (async () => {
      const timerRef = firestore.collection("timers").doc(timerID);
      startTime = await timerRef
        .get()
        .then((doc) => doc.data().createdAt.toDate().getTime());
    })();

    const timer = setInterval(() => {
      const newTime = new Date(Date.now() - startTime)
        .toISOString()
        .substr(11, 8);
      setElapsedTime(newTime);
    }, 1000);
    return () => {
      clearInterval(timer);
      cleanup(timerID);
    };
  }, [timerID, cleanup]);

  useEffect(() => {
    window.addEventListener("beforeunload", cleanup);

    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, [timerID, cleanup]);

  if (victory) {
    return <></>;
  }
  return (
    <Container>
      <Time>{elapsedTime}</Time>
    </Container>
  );
}

export default Timer;
