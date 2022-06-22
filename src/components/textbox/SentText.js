import "./SentText.css"

function SentText(){
  return (
    <div className="sent">
      <img src={require("./download .jpeg")} alt="nada"/>
      <div className="sentText">
        <h6>Sammy Doe</h6>
        <br></br>
        <p>Hello Mickey Mouse</p>
      </div>
    </div>
  );


}

export default SentText