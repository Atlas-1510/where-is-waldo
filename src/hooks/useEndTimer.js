// Libraries
import { useState, useEffect } from "react";

// Firebase
import { timeStamp, firestore } from "../firebase/firebase";

export default function useEndTimer(timerID) {
  const [timeElapsed, setTimeElapsed] = useState(null);

  const timerRef = firestore.collection("timers").doc(timerID);
  useEffect(() => {
    (async () => {
      await timerRef.set(
        {
          endedAt: timeStamp,
        },
        { merge: true }
      );

      const timer = await timerRef.get().then((doc) => doc.data());
      console.log(timer);

      const startTime = timer.createdAt.seconds;
      const endTime = timer.endedAt.seconds;

      const time = new Date((endTime - startTime) * 1000)
        .toISOString()
        .substr(11, 8);

      setTimeElapsed(time);
    })();

    return () => {
      timerRef.delete();
    };
  }, []);

  return timeElapsed;
}
