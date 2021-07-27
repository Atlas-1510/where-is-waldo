import { firestore } from "../firebase/firebase";

export default async function getMultiDocsFromFirestore(target, orderBy) {
  let ref;
  if (!orderBy) {
    ref = firestore.collection(target);
  } else {
    ref = firestore.collection(target).orderBy(orderBy);
  }
  const docs = [];
  await ref
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => console.log(err));
  return docs;
}
