import "./signup.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";

function SignUp({setAcc}) {
  // const [loading, setLoading] = useState()

  const [userdata, setUserData] = useState({
    username : "",
    email : '',
    password : '',
    phone: "",
    image: "",
  })

  function handleSubmit(e){
    e.preventDefault()
    // axios.post("http://localhost:4000/users", {
    //   userdata
    // })

    fetch("http://localhost:4400/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(userdata)
    });

    setUserData({
      username: "",
      email: "",
      password: "",
      phone: "",
      image: "",
    });
  }


  // const [ emails, setEmails] = useState([])
  // const getEmails = () =>{
  //   axios.get("http://localhost:4000/email")
  //   .then(res => res.data)
  //   .then(res => setEmails(res))
  // }
 
  // useEffect(() => {
  //   getEmails()
  // }, )
  // console.log(emails)


  
  // function handleSubmit(e){
  //   e.preventDefault()
  //   setUserData({
  //     ...userdata, 
  //     id :  Math.floor(Math.random() * 2000000)
  //   })
  //   if(userdata.name !== '' && userdata.email !== '' && userdata.password.length > 5){
  //     console.log(userdata)
  //   }
  //   axios.post("http://localhost:4000/addtask", {
  //     userdata
  //   })
  // }
  // console.log(userdata)
  return (
    <div className="container-main  signup">
      <form className="signup-card " onSubmit={handleSubmit}>
        <h4>SignUp</h4>
        <span className="span1">Made for developers by developers</span>
        <input
          name="email"
          required
          type="email"
          value={userdata.email}
          className="inputEmail"
          placeholder=" &#x1F4E9;  example@gmail.com"
          onChange={(e) =>
            setUserData({
              ...userdata,
              email: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          type="text"
          className="username"
          placeholder="sammy doe"
          required
          value={userdata.username}
          onChange={(e) =>
            setUserData({
              ...userdata,
              username: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          type="number"
          className="phone"
          placeholder="phone"
          required
          value={userdata.phone}
          onChange={(e) =>
            setUserData({
              ...userdata,
              phone: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          type="link"
          className="link"
          required
          placeholder="image link"
          value={userdata.image}
          onChange={(e) =>
            setUserData({
              ...userdata,
              image: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          required
          placeholder="&#128272;..........."
          value={userdata.password}
          onChange={(e) =>
            setUserData({
              ...userdata,
              password: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Agree To Terms And Policies?</span>
        <br />
        <br />
        <input type="submit" value = "submit" />
        <div className="text-center">
          <p>
            Already have an account? <NavLink to="/login">Login.</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp
