import "./ProfileCard.css"


function ProfileCard({ url }){
  

  return (
    <div className="container-main w3-card-4 profilecard">
      <div className="profile-image">
        <img className="image-fuid" src={url} />
      </div>
      <div className="holder">
        <br></br>
        <span className="name ">My Profile</span>
        <span className="pf-name">Wendy</span>
        <hr />
        <span className="name ">Email</span>
        <span className="pf-name">email@example.com</span>
        <hr />
        <span className="name ">Contact</span>
        <span className="pf-name">+254 - 742 - 890 - 878</span>
        <hr />
      </div>
    </div>
  );
}

export default ProfileCard