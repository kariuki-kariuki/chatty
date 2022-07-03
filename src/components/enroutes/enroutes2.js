import Login from "../login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "../signup/SignUp";

function Enroutes2({ setUserLogin }){
  return (
    <Routes>
      <Route path="/" element={<Login setUserLogin={setUserLogin} />} />
      <Route path="/signup" element={<SignUp setUserLogin={setUserLogin} />} />
    </Routes>
  );
}

export default Enroutes2