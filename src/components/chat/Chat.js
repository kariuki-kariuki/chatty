import "./Chat.css"
import Card from "../card/Card";
import SentText from "../textbox/SentText";
import RecvText from "../textbox/RecvText";

function Chat(){
  let cards = []
    for(let i = 0; i < 10; i++){
      cards.push(<Card />)
    }
  return (
    <div className="row">
      <div className="col-sm-3">{cards}</div>
      <div className="col-sm-6 user-chats">
        <SentText />
        <RecvText />
        <SentText />
        <RecvText />
        <SentText />
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}

export default Chat