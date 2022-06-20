import "./Chat.css"
import Card from "../card/Card";

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
      <div className="col-sm-6">

      </div>
      <div className="col-sm-3">

      </div>
    </div>
  );
}

export default Chat