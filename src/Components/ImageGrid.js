import React from "react";
import UseFirestore from "../hook1/useFirestore";
import { motion } from "framer-motion";
const ImageGrid = ({ selectImage }) => {
  const { docs } = UseFirestore("image");
  //console.log(docs);
  return (
    <div className="img-grid">
      {docs.map((doc) => (
        <motion.div
          className="img-wrap"
          key={doc.id}
          onClick={() => selectImage(doc.url)}
          layout
          whileHover={{ opacity: 1 }}
        >
          <img src={doc.url} alt="images" />
        </motion.div>
      ))}
    </div>
  );
};
export default ImageGrid;
