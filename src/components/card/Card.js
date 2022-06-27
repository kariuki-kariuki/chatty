import "./Card.css"

function Card({ setActiveChat }){
  function handleClick(){
    setActiveChat(789)
    // console.log(789)
  }
  return (
    <div className="myCard" onClick={handleClick}>
      <img src={require("./images.jpeg")} alt="nada"/>
      <div style={{paddingLeft: "0px"}}>
        <h5>Sammy Doe</h5>
        <p>Hello world</p>
      </div>
    </div>
  );
}

export default Card

