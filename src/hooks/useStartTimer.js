// Libraries
import { useEffect, useState } from "react";

// Firebase
import { timeStamp, firestore } from "../firebase/firebase";

export default function useStartTimer(location) {
  const [timerID, setTimerID] = useState(null);

  useEffect(() => {
    (async () => {
      const docRef = await firestore.collection("timers").add({
        createdAt: timeStamp,
      });
      setTimerID(docRef.id);
    })();
  }, [location]);

  return timerID;
}
