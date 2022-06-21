import "./Trans.css"

function Trans(){

  return (
    <div className="d-flex justify-content-around p-3 mt-2 bg-black myTable">
      <div className="trans-image">
        <img src={require("./download s.jpeg")}/>
      </div>
      <div className="sender">
        Jeff Bezzos
      </div>
      <div className="amount">
        $200
      </div>
      <div className="date">
        12-2-2022
      </div>
      <div className="status-sent">
          <p>Sent</p>
      </div>
    </div>
  );
}

export default Trans