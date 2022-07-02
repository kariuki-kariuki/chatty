import "./SentText.css"

function SentText({name, message, date = "hello", bc = ""}){
  let dt = new Date(date)
  let new_dt = `${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getFullYear()} @${parseInt(dt.getUTCHours()) + 3}:${dt.getUTCMinutes()}`
  // console.log(`${dt.getUTCDate()}/${dt.getUTCMonth()}/${dt.getFullYear()} @${dt.getUTCHours()}:${dt.getUTCMinutes()}:`)
  // console.log(new_dt)
  return (
    <div className="sent">
      <img src={require("./download .jpeg")} alt="nada" />
      <div className="sentText" style={{ backgroundColor: bc }}>
        <h6>{name}</h6>
        <br></br>
        <p>{message}</p>
        <p className="date">&#9997; {new_dt}</p>
      </div>
    </div>
  );


}

export default SentText