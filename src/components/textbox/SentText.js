import "./SentText.css"

function SentText({name, message, date}){
  let dt = Date(date).split(" ");
  let new_dt = [dt[0], dt[1], dt[4]].join(" ");
  return (
    <div className="sent">
      <img src={require("./download .jpeg")} alt="nada" />
      <div className="sentText">
        <h6>{name}</h6>
        <br></br>
        <p>{message}</p>
        <p className="date">&#9997; {new_dt}</p>
      </div>
    </div>
  );


}

export default SentText