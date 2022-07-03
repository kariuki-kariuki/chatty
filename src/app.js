import React, { useState } from "react";
import Nav from "./components/navigation/Nav";
import Chat from "./components/chat/Chat";
import { Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Funds from "./components/funds/Funds";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

function App(){
  const [userLogin, setUserLogin] = useState(false)
  return (
    <div className="container-main bg-dark hero">
      {!userLogin ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      ) : (
        <div className="row">
          <div className="col-sm-2 p-0">
            <Nav />
          </div>
          <div className="col-sm-10 p-0">
            <Routes>
              <Route path="/" element={<Chat userLogin={userLogin} />} />
              <Route path="/funds" element={<Funds userLogin={userLogin} />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/login"
                element={<Login setUserLogin={setUserLogin} />}
              />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      )}
      <SignUp />
    </div>
  );
}

export default App