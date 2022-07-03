import "./Card.css"
import {
  ref,
  // list,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "../../firebase"
import { useState } from "react";


function Card(props){
  
  const { userLogin, phone , name, setMessages, setActiveChat , text = "", activeChat} = props 
  const imageListRefOne = ref(storage, `profile-picture/${phone}`);
  const [imageToDisaplay, setImageToDisplay] = useState('')

  function handleClick(){
    setActiveChat({
      ...activeChat,
      phones: phone,
      names: name,
    });
    //chatty-apis.herokuapp.com/contacts/742
    fetch(
      `https://emkayint23.herokuapp.com/messages/${userLogin.phone}/${phone}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setMessages(res);
        console.log(document.getElementById("mychats").scrollHeight);
      });

      getDownloadURL(imageListRefOne)
        .then((url) => setImageToDisplay(<img src={url} alt="image not found" />))
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
          }
        });
    // console.log(document.getElementById("mychats").scrollHeight);
  }
  return (
    <div className="myCard" onClick={handleClick}>
      {imageToDisaplay}
      <div style={{paddingLeft: "0px"}}>
        <h5>{name}</h5>
        <p>{text === "" ? `Start Conversation with ${name}`: text}</p>
      </div>
    </div>
  );
}

export default Card

