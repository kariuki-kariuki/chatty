import { useState } from "react";
import "./contact.css"

function Contact({ setContactShow, contact }){
  console.log(contact)
  const [contactCard, setContactCard] = useState({
    name: "",
    phone: ""
  })
  function handleSubmit(e){
    e.preventDefault()
    
  }
  
  function handleContacts(){
    setContactShow(!contact)
  }
  return (
    <div className={`container-main contact p-3 ${ contact ? "block ": "none"}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          required
          value={contactCard.phone}
          onChange={(e) =>
            setContactCard({
              ...contactCard,
              name: e.target.value,
            })
          }
        />
        <input
          type="number"
          required
          value={ contactCard.phone }
          onChange={(e) =>
            setContactCard({
              ...contactCard,
              phone: e.target.value
            })
          }
        />
        <button className="btn btn-secondary" type="submit" >add </button>
        <button className="btn btn-primary" type="button"
          onClick={handleContacts}
        >Close</button>
      </form>
    </div>
  );
}

export default Contact