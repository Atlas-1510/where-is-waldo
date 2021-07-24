import { useState, useEffect } from "react";
import { firestore } from "../firebase/firebase";

export default function useFirestore(collection, orderBy) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let ref;
    if (!orderBy) {
      ref = firestore.collection(collection);
    } else {
      ref = firestore.collection(collection).orderBy(orderBy);
    }
    const unsub = ref.onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsub();
  }, [collection, orderBy]);

  return { docs };
}
