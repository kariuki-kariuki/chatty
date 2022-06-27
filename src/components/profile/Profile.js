import "./Profile.css"

function Profile({ userLogin }){
  return(
    <div className="container-main profile">
      <header>
        PROFILE
      </header>
      <div className="image">
        <img  src={ userLogin.image } alt="nada"/>
      </div>
      <div className="name">
        {userLogin.username}
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