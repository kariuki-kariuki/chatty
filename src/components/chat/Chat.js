import "./Chat.css"
import Card from "../card/Card";
import SentText from "../textbox/SentText";
import RecvText from "../textbox/RecvText";
import Profile from "../profile/Profile";

function Chat(){
  let cards = []
    for(let i = 0; i < 10; i++){
      cards.push(<Card />)
    }
  return (
    <div className="row">
      <div className="col-sm-3">
        {cards}
      </div>
      <div className="col-sm-6 user-chats">
        <SentText />
        <RecvText />
        <SentText />
        <RecvText />
        <SentText />
        <SentText />
      </div>
      <div className="col-sm-3 m-0">
        <Profile />
      </div>
    </div>
  );
}

export default Chat