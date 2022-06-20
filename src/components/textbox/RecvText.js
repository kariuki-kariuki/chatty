import "./RecvText.css"
function RecvText(){
  return (
    <div>
      <div className="recv">
        <img src={require("./cat.jpg")} />
        <div className="recvText">
          <h6>Sammy Doe</h6>
          <p>Want Some</p>
        </div>
      </div>
    </div>
  );
}

export default RecvText