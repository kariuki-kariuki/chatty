import "./RecvText.css"
function RecvText({name, message}){
  return (
    <div>
      <div className="recv">
        <img src={require("./cat.jpg")}alt="nada"/>
        <div className="recvText">
          <h6>{name}</h6>
          <p>{ message }</p>
        </div>
      </div>
    </div>
  );
}

export default RecvText