import { useState } from "react"


function Transfer({userLogin, activeChat}){
  const [amount, setAmount] = useState("")
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body : JSON.stringify({
      text_massage : amount,
      sender : userLogin.phone,
      receiver: activeChat.phones,
      type: "transaction"
    })
  })
  return(
    <form>
      <input type="number" placeholder = "amount in sh"/>
      <input type="submit" value = "send"/>
    </form>
  )

}