import { useState } from "react"
import "./chatbox.css"

function ChatBox({ userLogin, activeChat , setShow}){
  let recv = activeChat.phone 
  const [message, setMessage] = useState({
    text_massage : "",
    sender: userLogin.phone,
    receiver: activeChat.phones,
    type: "text"
  })
  
  function handleSubmit(e){
    e.preventDefault();
    setMessage({
      ...message,
      receiver: activeChat.phone
    })
    if(message.text_massage !== '' && activeChat.phone !== ""){
      fetch("https://emkayint23.herokuapp.com//messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          text_massage: message.text_massage,
          sender: message.sender,
          receiver: activeChat.phones,
          type: "text",
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
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