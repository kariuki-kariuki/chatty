import "./Item.css"

function Item({setDisplay }) {
  function changeVisibility() {
    setDisplay("block");
  }
  return (
      <div className="card my-width" onClick={changeVisibility}>
        <div className="d-flex justify-content-center">
          <img
            style={{ width: "100%", height: "200px" }}
            src={require("./4.jpeg")}
            alt="AN"
          />
        </div>
        <h6 className="pl-2">PlayStation 5</h6>
        <p className="pl-2 color-primary">$300.00</p>
      </div>
  );
}
export default Item