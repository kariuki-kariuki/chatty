import { useState } from "react"
import "./Transfer.css"

function Transfer({userLogin, activeChat, setShow, show}){
  const [amount, setAmount] = useState("")
  fetch("http://localhost:4400/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      text_massage: amount,
      sender: userLogin.phone,
      receiver: activeChat.phones,
      type: "transaction",
    }),
  });
  return (
    
    <form className={`transaction-card ${show}`}>
      <input type="number" placeholder="amount in sh" className="money" required value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <br />
      <br />
      <input type="submit" value="send" className="money-send"/><button type = "button" className="b" onClick={() => setShow("none")}>Close</button>
    </form>
  );

}

export default Transfer