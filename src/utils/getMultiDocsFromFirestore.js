import { firestore } from "../firebase/firebase";

export default async function getMultiDocsFromFirestore(target) {
  const docs = [];
  await firestore
    .collection(target)
    .get()
    .then((snap) => {
      snap.forEach((doc) => {
        docs.push(doc.data());
      });
    })
    .catch((err) => console.log(err));
  return docs;
}
