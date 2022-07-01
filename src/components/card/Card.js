import { useState } from "react";
import "./Card.css"

function Card({ userLogin, phone , name, setMessage, setActiveChat , text = "", activeChat}){

  function handleClick(){

    setActiveChat({
      ...activeChat,
      phones: phone,
      names: name
    })
//chatty-apis.herokuapp.com/contacts/742
https: fetch(`https://emkayint23.herokuapp.com/messages/${userLogin.phone}/${phone}`)
  .then((res) => res.json())
  .then((res) => setMessage(res));
  }
  return (
    <div className="myCard" onClick={handleClick}>
      <img src={require("./images.jpeg")} alt="nada"/>
      <div style={{paddingLeft: "0px"}}>
        <h5>{name}</h5>
        <p>{text === "" ? `Start Conversation with ${name}`: text}</p>
      </div>
    </div>
  );
}

export default Card

