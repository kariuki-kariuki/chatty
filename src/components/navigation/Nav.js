import "./Nav.css"
import { NavLink } from "react-router-dom";
function Nav(){
  return (
    <nav>
      <span className="span-1"></span>
      <span className="span-2"></span>
      <span className="span-3"></span>

      <NavLink to="/">
        <div className="nav">
          <span
            className="iconify"
            data-icon="bi:chat-dots-fill"
            style={{ color: "yellow" }}
            data-width="48"
            data-height="48"
          ></span>
        </div>
      </NavLink>

      <NavLink to="/funds">
        <div className="nav-2">
          <span
            className="iconify"
            data-icon="ant-design:account-book-filled"
            style={{ color: "yellow" }}
            data-width="48"
            data-height="48"
          ></span>
        </div>
      </NavLink>

      {/* <NavLink to="/shop">
        <div className="nav-3">
          <span
            className="iconify"
            data-icon="ic:round-add-business"
            style={{ color: "yellow" }}
            data-width="48"
            data-height="48"
          ></span>
        </div>
      </NavLink> */}
    </nav>
  );
}

export default Nav