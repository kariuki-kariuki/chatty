import "./signup.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../firebase"

function SignUp(setUserLogin) {

  const [userdata, setUserData] = useState({
    username : "",
    email : '',
    password : '',
    phone: "",
  })
  const [imgUpload, setImgUpload] = useState(null);
  console.log(imgUpload);

  const uploadImg = () => {
    if (imgUpload == null) return;
    const imageRef = ref(storage, `profile-picture/${userdata.phone}`);
    uploadBytes(imageRef, imgUpload);
  };


  function handleSubmit(e){
    e.preventDefault()

    fetch("https://emkayint23.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userdata),
    });

    setUserData({
      username: "",
      email: "",
      password: "",
      phone: "",
      image: "",
    });
  }

  return (
    <div className="container-main  signup">
      <form className="signup-card " onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="container-main d-flex justify-content-center align-items-center pt-5 mt-5">
              <div className="profile-choice">
                <img src=""/>
              </div>
            </div>

            <input type="file" className="file" onChange = {(e) => setImgUpload(e.target.files)}/>
          </div>

          <div className="col-sm-6">
        
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
              className="username"
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
            <input type="submit" value = "SignUp" className="submit" />
            <div className="text-center">
              <p>
                Already have an account? <NavLink to="/">SignIn</NavLink>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp
