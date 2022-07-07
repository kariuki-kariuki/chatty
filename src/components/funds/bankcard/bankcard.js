import "./bankcard.css"
import useFetch from "../../../hooks/fetchprofile"
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import { QRCodeCanvas } from 'qrcode.react'
function Bankcard(){
  let image = useFetch(742)
  console.log(image)

  return (
    <div className="bankcard">
      <div className="chattybank">
        <div className="row">
          <div className="col-sm-6">
            <h3>CHATTY WALLET</h3>
            <MemoryRoundedIcon color="primary" />
          </div>
          <div className="col-sm-6">
            <div className="qrcode">
              <QRCodeCanvas
                value="https://chatty-six.vercel.app/"
                bgColor="rgba(0, 0, 0, 0)"
                size="100"
                fgColor="white"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around ">
          <span>1234</span>
          <span>4567</span>
          <span>8910</span>
          <span>1120</span>
        </div>
        <p className="valid">
          valid{" "}
          <span>
            2022 <span>2032</span>
          </span>
        </p>
      </div>
    </div>
  );
}


export default Bankcard