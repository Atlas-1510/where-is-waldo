// Libraries
import { useState, useEffect } from "react";

// Firebase
import { timeStamp, firestore } from "../firebase/firebase";

export default function useEndTimer(timerID) {
  const [timeElapsed, setTimeElapsed] = useState(null);

  useEffect(() => {
    (async () => {
      const timerRef = firestore.collection("timers").doc(timerID);

      await timerRef.set(
        {
          endedAt: timeStamp,
        },
        { merge: true }
      );

      const timer = await timerRef.get().then((doc) => doc.data());

      const startTime = timer.createdAt.seconds;
      const endTime = timer.endedAt.seconds;

      const time = new Date((endTime - startTime) * 1000)
        .toISOString()
        .substr(11, 8);

      setTimeElapsed(time);
    })();
  }, [timerID]);

  return timeElapsed;
}
