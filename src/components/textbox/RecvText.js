import "./RecvText.css"
function RecvText({name, message, date}){

  let dt = Date(date).split(" ")
  let new_dt = [dt[0], dt[1], dt[4]].join(" ")
  return (
    <div>
      <div className="recv">
        <img src={require("./cat.jpg")} alt="nada" />
        <div className="recvText">
          <h6>{name}</h6>
          <p>{message}</p>
          <p className="date">&#9997; {new_dt}</p>
        </div>
      </div>
    </div>
  );
}

export default RecvText