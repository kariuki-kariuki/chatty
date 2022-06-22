import React from "react";
import Nav from "./components/navigation/Nav";
import Chat from "./components/chat/Chat";
import Trans from "./components/funds/trans/Trans";
import Shop from "./components/shop/Shop";
function App(){
  return (
    <div className="container-main bg-dark hero">
      <div className="row">
        <div className="col-sm-2 p-0">
          <Nav />
        </div>
        <div className="col-sm-10 p-0">
          {/* <Chat /> */}
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App