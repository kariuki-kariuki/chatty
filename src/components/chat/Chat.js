import "./Chat.css"
import Card from "../card/Card";
import SentText from "../textbox/SentText";
import RecvText from "../textbox/RecvText";
// import Profile from "../profile/Profile";
import ChatBox from "../chatbox/chatbox";
import Transfer from "../transfers/Transfer";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";


function Chat({userLogin}){
  const [activeChat, setActiveChat] = useState({
    phone: "",
    name: "", 
    image : ""
  });
  const [contacts, setContacts] = useState([])
  const [msg, setMessages] = useState([])
  const [show, setShow] = useState('none')
  const [contacted, setContactShow] = useState(false)


  useEffect(() => {
    fetch(
      `https://protected-fortress-94035.herokuapp.com/contacts/${userLogin.phone}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setContacts(res);
      });
      
      let div = document.getElementById('mychats')
      // document.getElementById("mychats").scrollTop = location;
      div.scrollTop = div.scrollHeight

  }, [userLogin, setContacts, msg,])

 

  let contacts_to_display = contacts.map(contact => 
    { if(contact.last_message !== null){
      return (
        <Card
          name={contact.name}
          phone={contact.phone}
          setActiveChat={setActiveChat}
          key={contact.phone}
          date={contact.created_at}
          userLogin={userLogin}
          setMessages ={ setMessages }
          text={contact.last_message.text_massage}
          activeChat={activeChat}
        />
      );
    } else {
      return (
        <Card
          name={contact.name}
          phone={contact.phone}
          setActiveChat={setActiveChat}
          key={contact.phone}
          date={contact.created_at}
          userLogin={userLogin}
          setMessages={setMessages}
          activeChat={activeChat}
        />
      );
      
    }
  })
  
  function handleContact(){
    setContactShow(!contacted)
  }

  let message_to_display = msg.map((msgs) => {
    if(msgs.sender === userLogin.phone && msgs.typ === "text"){
      return (
        <SentText
          name={userLogin.username}
          message={msgs.text_massage}
          key={msgs.id}
          phone = { userLogin.phone }
          date = {msgs.created_at}
        />
      );
    } else if(msgs.sender !== userLogin && msgs.typ === "text") {
      return (
        <RecvText
          name={activeChat.name}
          phone = {activeChat.phone}
          message={msgs.text_massage}
          date={msgs.created_at}
          key={msgs.id}
        />
      );
    } else if(msgs.sender !== userLogin.phone && msgs.typ === "transaction"){
      return (
        <RecvText
          name={activeChat.name}
          phone={activeChat.phone}
          message={`Receved Ksh: ${msgs.text_massage} from ${activeChat.name}`}
          key={msgs.id}
          bc="yellow"
        />
      );
    } else if (msgs.sender === userLogin.phone && msgs.typ === "transaction") {
      return (
        <SentText
          name={activeChat.name}
          message={`Sent Ksh: ${msgs.text_massage} to ${activeChat.name}`}
          key={msgs.id}
          phone={userLogin.phone}
          date={msgs.created_at}
          bc="yellow"
        />
      );
    }
  })

  


  
  return (
    <div className="row">
      <div className="col-sm-3">
        <button type = "button" className="btn btn-primary mybtn text-white" onClick={ handleContact }>new contact</button>
        <Contact contact={ contacted } setContactShow = {setContactShow}/>
        {contacts_to_display}
      </div>
      <div className="col-sm-9 user-chats" id="mychats">
        {message_to_display}
        <ChatBox
          userLogin={userLogin}
          activeChat={activeChat}
          setMessages ={ setMessages }
          setShow = {setShow}
        />
        <Transfer userLogin={userLogin} activeChat={ activeChat } setMessages = { setMessages } setShow = { setShow } show={show}/>
      </div>
    </div>
  );
}

export default Chat