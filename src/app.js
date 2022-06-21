import React from "react";
import Nav from "./components/navigation/Nav";
import Chat from "./components/chat/Chat";
import Trans from "./components/funds/trans/Trans";
function App(){
  return (
    <div className="container-main bg-dark hero">
      <div className="row">
        <div className="col-sm-2">
          <Nav />
        </div>
        <div className="col-sm-10">
          {/* <Chat /> */}
          <Trans />
          <Trans />
          <Trans />
          <Trans />
          <Trans />
          <Trans />
        </div>
      </div>
    </div>
  );
}

export default App