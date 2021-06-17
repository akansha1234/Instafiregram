import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamp
} from "../firebase/config";
// import "firebase/storage";
import firebase from "@firebase/app";
const UserStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setUrl] = useState(" ");

  useEffect(() => {
    const storageRef = firebase.storage().ref();
    const collectionRef = projectFirestore.collection("image");
    // console.log(collectionRef.add);
    var uploadTask = storageRef.child("images/" + file.name).put(file);
    uploadTask.on(
      "state_changed",
      (snap) => {
        //console.log(snap);
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      }
      // async () => {
      //   // console.log(uploadTask);
      //   const url = await snap.ref.getDownloadURL();
      //   setUrl(url);
      // }
    );
    uploadTask.then((snap) => {
      snap.ref.getDownloadURL().then((url) => {
        const createdAt = timeStamp();
        collectionRef.add({ url, createdAt });
        //console.log(collectionRef);
        //console.log(url, "hello");
        setUrl(url);
      });
    });
  }, [file]);
  return { progress, error, url };
};

export default UserStorage;
