import Trans from "./trans/Trans"
import "./Funds.css"
import Bankcard from "./bankcard/bankcard";
import ProfileCard from "./profilecard/ProfileCard";
import useFetch from "../../hooks/fetchprofile";

function Funds(){

  let url = useFetch(742)
  return (
    <div className="funds">
      <div className="row">
        <div className="col-sm-6">
          <ProfileCard url = { url }/>
          <Bankcard  />
        </div>
      </div>
    </div>
  );
}

export default Funds