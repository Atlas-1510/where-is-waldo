// Libraries
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Firebase
import { timeStamp, firestore } from "../firebase/firebase";

const Container = styled.div`
  align-self: center;
  margin: 1rem;
`;

function Timer({ timerID }) {
  const [elapsedTime, setElapsedTime] = useState("00:00:00");

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
    };
  }, []);

  return (
    <Container>
      <h1>{elapsedTime}</h1>
    </Container>
  );
}

export default Timer;
