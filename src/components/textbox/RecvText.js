import "./RecvText.css"
import {
  ref,
  // list,
  getDownloadURL,
} from "firebase/storage";

import { useState, useEffect } from "react";
import { storage } from "../../firebase";



function RecvText({name, message, date, phone}){
  const [imageToDisaplay, setImageToDisplay] = useState("");
  const imageListRefOne = ref(storage, `profile-picture/${phone}`);

  let dt = new Date(date);
  let new_dt = `${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getFullYear()} @${
    parseInt(dt.getUTCHours()) + 3
  }:${dt.getUTCMinutes()}`;

  useEffect(() => {
    getDownloadURL(imageListRefOne)
      .then((url) => {
        setImageToDisplay(<img src={url} alt="not found" />);
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            break;
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
          default:
        }
      });
  }, []);


  return (
    <div>
      <div className="recv">
        {imageToDisaplay}
        <div className="recvText">
          <h6>{name}</h6>
          <p>{message}</p>
          <p className="date">&#9997; {new_dt}</p>
        </div>
      </div>
    </div>
  );
}

export default RecvText