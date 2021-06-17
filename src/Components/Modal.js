import React from "react";
const Modal = ({ selectImage, setSelectImage }) => {
  const handleChange = (e) => {
    setSelectImage(null);
  };
  return (
    <div className="backdrop" onClick={handleChange}>
      <img src={selectImage} alt="enlarged-pic" />
    </div>
  );
};
export default Modal;
