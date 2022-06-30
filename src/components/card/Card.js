import "./Card.css"

function Card({ userLogin, phone , name, setMessage, setActiveChat }){
  function handleClick(){
    setActiveChat({phone: phone, name: name})
    fetch(`http://localhost:4400/messages/${userLogin.phone}/${phone}`)
      .then((res) => res.json())
      .then((res) => setMessage(res));
    // console.log(789)
  }
  return (
    <div className="myCard" onClick={handleClick}>
      <img src={require("./images.jpeg")} alt="nada"/>
      <div style={{paddingLeft: "0px"}}>
        <h5>{name}</h5>
        {/* <p>Hello world</p> */}
      </div>
    </div>
  );
}

export default Card

