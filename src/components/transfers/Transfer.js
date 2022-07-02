import { useState } from "react"
import "./Transfer.css"

function Transfer({userLogin, activeChat, setShow, show, setMessages}){
  const [amount, setAmount] = useState("")

  function handleSubmit(){
    if(amount !== ""){
      fetch("https://emkayint23.herokuapp.com/messages/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          text_massage: amount,
          sender: userLogin.phone,
          receiver: activeChat.phones,
          typ: "transaction",
        }),
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }
  
  return (
    
    <form className={`transaction-card ${show}`} onSubmit={handleSubmit}>
      <input type="number" placeholder="amount in sh" className="money" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <input type="submit" value="send" className="money-send"/><button type = "button" className="b" onClick={() => setShow("none")}>Close</button>
    </form>
  );

}

export default Transfer