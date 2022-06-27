import { useState } from "react"
import "./chatbox.css"

function ChatBox({ userLogin, activeChat }){
  const [message, setMessage] = useState({
    text_massage : "",
    sender: userLogin.phone,
    receiver: activeChat
    // type: "sent"
  })
  function handleSubmit(e){
    console.log(activeChat);
    e.preventDefault()
    console.log(message)
    fetch("http://localhost:4400/messages", {
      method: "POST",
      headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(message)

    })
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
    </form>
  )
}

export default ChatBox