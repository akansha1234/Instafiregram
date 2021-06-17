import "./styles.css";
import React, { useState } from "react";
import Input from "./Components/Input";
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";
export default function App() {
  const [selectImage, setSelectImage] = useState(null);
  return (
    <div className="app">
      <h1>Your Gallery</h1>
      <Input />
      <ImageGrid selectImage={setSelectImage} />
      {selectImage && (
        <Modal selectImage={selectImage} setSelectImage={setSelectImage} />
      )}
    </div>
  );
}
