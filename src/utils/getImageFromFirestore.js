import { storage } from "../firebase/firebase";

export default async function getImageFromFirestore(url) {
  const ref = storage.refFromURL(url);
  const image = await ref
    .getDownloadURL()
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  return image;
}
