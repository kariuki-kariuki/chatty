import "./Profile.css"

function Profile(){
  return(
    <div className="container-main profile">
      <header>
        PROFILE
      </header>
      <div className="image">
        <img  src={require("./download.jpeg")}/>
      </div>
      <div className="name">
        Sammy Doe
      </div>
      <div className="container-main transaction">
        <h3 className="text-center">SPENDINGS</h3>
        <div className="sentmon">
          Sent
        </div>
      </div>
    </div>
  )
}

export default Profile