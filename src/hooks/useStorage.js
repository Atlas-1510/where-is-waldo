import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase";

export default function useStorage(url) {
  const [downloadURL, setDownloadURL] = useState(null);
  useEffect(() => {
    const ref = storage.refFromURL(url);
    ref
      .getDownloadURL()
      .then((response) => {
        setDownloadURL(response);
      })
      .catch((err) => console.log(err));
  }, [url, downloadURL]);

  return downloadURL;
}
