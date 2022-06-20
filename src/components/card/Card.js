import "./Card.css"

function Card(){
  return (
    <div className="myCard">
      <img src={require("./images.jpeg")}/>
      <div style={{paddingLeft: "10px"}}>
        <h5>Sammy Doe</h5>
        <p>Hello world</p>
      </div>
    </div>
  );
}

export default Card

