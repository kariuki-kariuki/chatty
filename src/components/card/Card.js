import "./Card.css"

function Card(props){
  
  const { userLogin, phone , name, setMessages, setActiveChat , text = "", activeChat} = props 
  function handleClick(){

    setActiveChat({
      ...activeChat,
      phones: phone,
      names: name
    })
//chatty-apis.herokuapp.com/contacts/742
    fetch(`https://emkayint23.herokuapp.com/messages/${userLogin.phone}/${phone}`,{
      headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => {
      setMessages(res)
      console.log(document.getElementById("mychats").scrollHeight);

    });
    // console.log(document.getElementById("mychats").scrollHeight);
  }
  return (
    <div className="myCard" onClick={handleClick}>
      <img src={require("./images.jpeg")} alt="nada"/>
      <div style={{paddingLeft: "0px"}}>
        <h5>{name}</h5>
        <p>{text === "" ? `Start Conversation with ${name}`: text}</p>
      </div>
    </div>
  );
}

export default Card

