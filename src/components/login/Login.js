import "./Login.css"
import { NavLink } from "react-router-dom";
// import axios from 'axios'
import {  useState, useRef } from "react";
import { login, useAuth, logout } from "../../firebase";

function Login(){
  const user = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef() 
  const [load, setLoad] = useState(false)
 

  async function handleLogin(){
    setLoad(true)
    try{
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("invalid password or email")
    }
    setLoad(false)
  }
  async function handelLogout() {
    setLoad(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setLoad(false);
  }

  function handleSubmit(e){
    e.preventDefault();

    if(user){
      handelLogout()
    } else {
      if (emailRef.current.value !== "" && passwordRef.current.value !== "") {
        // setLogin(true)
        handleLogin();
      } else {
        alert("user not found: signUp if you do not have an account");
      }
    }
      
    
  }
  // function getUsers (){
  //     axios.get("http://localhost:4000/users")
  //     .then((res) => res.data)
  //     .then(res => setUsers(res))
  // }
  // console.log(users)

  // useEffect(() => {
  //   getUsers()
  // }, [])

  
 
  return (
    <div className="container-main  login">
      <form className="login-card " onSubmit={handleSubmit}>
        <h4>Login</h4>
        <span className="span1">Login to manage your account</span>
        <input
          name="email"
          type="email"
          className="inputEmail"
          ref={emailRef}
          placeholder=" &#x1F4E9;  example@gmail.com"
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          ref = { passwordRef }
          placeholder="&#128272;..........."
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Remember Me?</span>
        <br />
        <br />
        <button type="submit" disabled = {load || user}  className="submit" >{user ? "Logout" : "Login"}</button>
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