import { Route, Routes } from "react-router-dom";
import Chat from "../chat/Chat"
import Nav from "../navigation/Nav"
import Funds from "../funds/Funds"
import Shop from "../shop/Shop"

function Enroutes({userLogin, setUserLogin}) {
  return (
    <div className="row">
      <div className="col-sm-2 p-0">
        <Nav />
      </div>
      <div className="col-sm-10 p-0">
        <Routes>
          <Route path="/" element={<Chat userLogin={userLogin} setUserLogin = { setUserLogin }/>} />
          <Route path="/funds" element={<Funds userLogin={userLogin} />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </div>
  );
}

export default Enroutes;
