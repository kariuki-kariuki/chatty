import "./SentText.css"

function SentText({name, message}){
  return (
    <div className="sent">
      <img src={require("./download .jpeg")} alt="nada"/>
      <div className="sentText">
        <h6>{name}</h6>
        <br></br>
        <p>{message}</p>
      </div>
    </div>
  );


}

export default SentText