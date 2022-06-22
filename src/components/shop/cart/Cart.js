import "./Cart.css"

function Cart({ display, setDisplay}){

  function hideItems(){
    setDisplay("none")
  }
  return (
    <div className={`add-cart ${display}`}>
      <div className="row">
        <div className="col-sm-8">
          <button className="btn btn-primary p-1" onClick={hideItems}>X</button>
          <img className="image" alt="name" src={require("./3.jpeg")} style={{width: "50%", height:"auto"}}/>
          <div className="smallImg d-flex justify-content-around">
            <img src={require("./3.jpeg")} alt="none" />
            <img src={require("./3.jpeg")} alt="none" />
            <img src={require("./3.jpeg")} alt="none" />
          </div>
        </div>
        <div className="col-sm-4">
          <h2>Sonny PlayStation 5</h2>
          <br />
          <br />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <button className="btn btn-danger"> Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cart