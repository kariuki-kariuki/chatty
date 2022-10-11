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
        <div className="col-sm-6 col-lg-6 h-100">
          <ProfileCard url={url} />
        </div>
        <div className="col-sm-6 col-lg-6 h-100">
          <div className="container-main  align-content-center justify-content-center">
            <Bankcard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds