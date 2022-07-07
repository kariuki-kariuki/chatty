import Trans from "./trans/Trans"
import "./Funds.css"
import Bankcard from "./bankcard/bankcard";


function Funds(){
  return (
    <div className="funds">
      <div className="row">
        <div className="col-sm-6">
          <Bankcard />
        </div>
      </div>
    </div>
  );
}

export default Funds