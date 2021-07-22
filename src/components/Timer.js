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
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let startTime;
    (async () => {
      const timerRef = firestore.collection("timers").doc(timerID);
      startTime = await timerRef
        .get()
        .then((doc) => doc.data().createdAt.toDate().getTime());
    })();

    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
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
