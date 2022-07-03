import { useEffect, useState } from "react"
import "./Profile.css"

function Profile({ userLogin }){

  const [balance, setBalance] = useState("")

  // useEffect(() => {
  //   fetch(`https://emkayint23.herokuapp.com/balance/${userLogin.phone}`)
  //     .then((bal) => bal.json)
  //     .then((bal) => setBalance(bal));
  // }, [])

  

  return(
    <div className="container-main profile">
      <header>
        PROFILE
      </header>
      <div className="image">
        <img  src={ require("./download.jpeg") } alt="nada"/>
      </div>
      <div className="name">
        {userLogin.username}
      </div>
      <div className="container-main transaction">
        <h3 className="text-center">SPENDINGS</h3>
        <div className="sentmon">
          Sent
        </div>
      </div>
    </div>
  )
}

export default Profile