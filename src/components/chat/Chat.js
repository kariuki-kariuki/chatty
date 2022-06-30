import "./Chat.css"
import Card from "../card/Card";
import SentText from "../textbox/SentText";
import RecvText from "../textbox/RecvText";
import Profile from "../profile/Profile";
import ChatBox from "../chatbox/chatbox";
import { useEffect, useState } from "react";

function Chat({userLogin}){
  const [activeChat, setActiveChat] = useState({name: "", phone: ""});
  const [contacts, setContacts] = useState([])
  const [msg, setMessage] = useState([])
  console.log(msg)

  useEffect(() => {
    fetch(`http://localhost:4400/contacts/${userLogin.phone}`)
      .then((res) => res.json())
      .then((res) => setContacts(res));
  }, [userLogin, setContacts])

 

  let contacts_to_display = contacts.map(contact => (
    <Card name = {contact.name} phone = {contact.receiver} setActiveChat = { setActiveChat } key={contact.receiver} userLogin = { userLogin } setMessage = { setMessage }/>
  ))

  let message_to_display = msg.map((msgs) => {
    if(msgs.sender === userLogin.phone && msgs.typ === "text"){
      return <SentText name = {userLogin.name} message = { msgs.text_massage} key = {msgs.id}/>
    } else if(msgs.sender !== userLogin && msgs.typ === "text") {
      return <RecvText name={activeChat.name} message={msgs.text_massage} key = {msgs.id}/>;
    } else if(msgs.sender === userLogin.phone && msgs.type === "transactions"){

    }
  })

  console.log(message_to_display)

  
  return (
    <div className="row">
      <div className="col-sm-3">{ contacts_to_display }</div>
      <div className="col-sm-6 user-chats">
        { message_to_display }
        <ChatBox userLogin = { userLogin } activeChat={ activeChat }/>
      </div>
      <div className="col-sm-3 m-0">
        <Profile userLogin = { userLogin }/>
      </div>
    </div>
  );
}

export default Chat