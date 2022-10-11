import { useState } from "react"
import "./chatbox.css"

function ChatBox({ userLogin, activeChat , setShow, setMessages }){
  const [message, setMessage] = useState({
    text_massage : "",
    sender: userLogin.phone,
    receiver: activeChat.phone,
    type: "text"
  })
  
  function handleSubmit(e){
    e.preventDefault();
    setMessage({
      ...message,
      receiver: activeChat.phone
    })
    if(message.text_massage !== '' && activeChat.phone !== ""){
      fetch("https://protected-fortress-94035.herokuapp.com/messages/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          text_massage: message.text_massage,
          sender: message.sender,
          receiver: activeChat.phone,
          type: "text",
        }),
      })
        .then((res) => res.json())
        .then((res) => setMessages(res))
        .catch((err) => console.log(err.message));
      setMessage({
        ...message,
        text_massage : ""
      })
    }
  }

  return(
    <form className="chatbox" onSubmit={ handleSubmit }>
      <input type="text" placeholder="Start Typing ..."
        value={message.text_massage}
        onChange={(e) => setMessage({
          ...message,
          text_massage : e.target.value
        })}
      />
      <button type="submit">send</button>
      <button style={{marginLeft: "10px"}} onClick = {() => setShow("block")} >wallet</button>
    </form>
  )
}

export default ChatBox