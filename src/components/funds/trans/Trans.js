import "./Trans.css"

function Trans(){

  return (
    <div className="d-flex justify-content-around p-1 align-items-center mt-2  myTable">
      <div className="">
        <img className="trans-image" src={require("./download s.jpeg")} style={{ width: "20%", height: "auto"}}/>
      </div>
      <div className="sender">Jeff Bezzos</div>
      <div className="amount">$200</div>
      <div className="date">12-2-2022</div>
      <div className="status-sent">
        <p>Sent</p>
      </div>
    </div>
  );
}

export default Trans