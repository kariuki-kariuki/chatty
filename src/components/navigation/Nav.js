import "./Nav.css"
function Nav(){
  return (
    <nav>
      <span className="span-1"></span>
      <span className="span-2"></span>
      <span className="span-3"></span>

      <div className="nav">
        <span
          className="iconify"
          data-icon="bi:chat-dots-fill"
          style={{ color: "yellow" }}
          data-width="48"
          data-height="48"
        ></span>
      </div>

      <div className="nav-1">
        <span
          className="iconify"
          data-icon="bxs:user-circle"
          style={{ color: "yellow", marginTop: "20px" }}
          data-width="52"
          data-height="52"
        ></span>
      </div>

      <div className="nav-2">
        <span
          className="iconify"
          data-icon="ant-design:account-book-filled"
          style={{ color: "yellow" }}
          data-width="48"
          data-height="48"
        ></span>
      </div>

      <div className="nav-3">
        <span
          class="iconify"
          data-icon="ic:round-add-business"
          style={{color: "yellow"}}
          data-width="48"
          data-height="48"
        ></span>
      </div>
    </nav>
  );
}

export default Nav