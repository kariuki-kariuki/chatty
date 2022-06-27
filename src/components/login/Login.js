import "./Login.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import useLogin from "../../hooks/useLogin";
// import axios from 'axios'

function Login({ setUserLogin }){
  const[db, setDbphone] = useState({
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const[loginData, setLoginData] = useState({
    password: "",
    phone: "",
  })

  function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    fetch(`http://localhost:4400/users/${loginData.phone}`)
    .then(res => res.json())
    .then(res => {
      setDbphone(res)
      setLoading(false)
    })


    if(!loading){
      console.log(db)
      if(db.password === loginData.password){
        // useLogin(loginData.phone)
        alert("login successfull")
        setUserLogin({
          username: db.username,
          phone: db.phone,
          image: db.image
        })

      } else{
        alert("User not found")
      }
    }


  }

  return (
    <div className="container-main  login" onSubmit={handleLogin}>
      <form className="login-card ">
        <h4>Login</h4>
        <span className="span1">Login to manage your account</span>
        <input
          name="phone"
          type="number"
          className="inputEmail"
          placeholder="071234567"
          value={loginData.phone}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              phone: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="&#128272;..........."
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Remember Me?</span>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <div className="text-center">
          <p>
            Don't have an account?
            <NavLink to="/signup"> SignUp</NavLink>
          </p>
          <p>Forget Password</p>
        </div>
      </form>
    </div>
  );
}

export default Login