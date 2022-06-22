import "./shop.css"
import Search from "./search/Search";

function Shop(){
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-sm-2">
          <div className="navigation-bs">
            <h1>Shopp</h1>
            <Search />
            <p className="cat">Categories</p>
            <div className="Categs">Electronics</div>
            <div className="Categs">Clothing</div>
            <div className="Categs">Kitchen</div>
            <div className="Categs">Accessories</div>
            <div className="Categs">Services</div>
            <div className="Categs">Beauty products</div>
            <div className="filter">Filter</div>
          </div>
        </div>
        <div className="col-sm-10"></div>
      </div>
    </div>
  );
}

export default Shop