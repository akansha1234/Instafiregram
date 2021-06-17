import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
const UseFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (snap) => {
          let document = [];
          snap.forEach((doc) => {
            document.push({ ...doc.data(), id: doc.id });
          });
          setDocs(document);
        },
        (error) => {
          console.log(error);
        }
      );
    return () => unsub();
  }, [collection]);
  return { docs };
};
export default UseFirestore;
