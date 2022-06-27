import "./Chat.css"
import Card from "../card/Card";
import SentText from "../textbox/SentText";
import RecvText from "../textbox/RecvText";
import Profile from "../profile/Profile";
import ChatBox from "../chatbox/chatbox";
import { useState } from "react";

function Chat({userLogin}){
  const [activeChat, setActiveChat] = useState("")
  const [msg, setMessage] = useState("")

  fetch(`http://localhost:4400/messages/msg/${userLogin.phone}/${activeChat}`)
  .then(res => res.json())
  .then(res => console.log(res))
  let cards = []
    for(let i = 0; i < 10; i++){
      cards.push(<Card setActiveChat = { setActiveChat }/>)
    }
  return (
    <div className="row">
      <div className="col-sm-3">{cards}</div>
      <div className="col-sm-6 user-chats">
        <SentText />
        <RecvText />
        <SentText />
        <RecvText />
        <SentText />
        <SentText />
        <SentText />
        <SentText />
        <SentText />
        <ChatBox userLogin = { userLogin } activeChat={ activeChat }/>
      </div>
      <div className="col-sm-3 m-0">
        <Profile userLogin = { userLogin }/>
      </div>
    </div>
  );
}

export default Chat