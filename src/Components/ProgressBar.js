import React, { useEffect } from "react";
import UserStorage from "../hook1/userStorage";
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = UserStorage(file);
  //const [didMount, setDidMount] = useState(false);
  //console.log(progress, url);
  useEffect(() => {
    // if (url.length !== 0) {
    //   console.log(url, "hii");
    //console.log("component mounted 1 compo");
    // }
    return () => {
      // console.log("component unmounted 1 compo");
      setFile(null);
      //setDidMount(false);
    };
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};
export default ProgressBar;
