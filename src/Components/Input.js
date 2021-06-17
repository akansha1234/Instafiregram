import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const Input = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const [error, setError] = useState(null);
  const onChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(" ");
    } else {
      setFile(null);
      setError("Please choose the image(png or jpeg)");
    }
  };
  return (
    <form className="input-form">
      <label className="label-form">
        <input type="file" onChange={onChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default Input;
