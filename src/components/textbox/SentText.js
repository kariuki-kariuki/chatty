import "./SentText.css"
import {
  ref,
  // list,
  getDownloadURL,
} from "firebase/storage";

import { useState, useEffect } from "react";
import { storage } from "../../firebase";

function SentText({name, message, date = "hello", bc = "", phone}){
  console.log(phone)
  const [imageToDisaplay, setImageToDisplay] = useState("");
  const imageListRefOne = ref(storage, `profile-picture/${phone}`);
  let dt = new Date(date)
  let new_dt = `${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getFullYear()} @${parseInt(dt.getUTCHours()) + 3}:${dt.getUTCMinutes()}`
  // console.log(`${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getFullYear()} @${dt.getUTCHours()}:${dt.getUTCMinutes()}:`)
  // console.log(new_dt)
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
    <div className="sent">
      {imageToDisaplay}
      <div className="sentText" style={{ backgroundColor: bc }}>
        <h6>{name}</h6>
        <br></br>
        <p>{message}</p>
        <p className="date">&#9997; {new_dt}</p>
      </div>
    </div>
  );


}

export default SentText