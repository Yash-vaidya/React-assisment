import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            <img src="logo192.png" style={{ width: "40px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active fs-5">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mobile" className="nav-link active fs-5">
                  Mobile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/laptop" className="nav-link active fs-5">
                  Laptop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/watch" className="nav-link active fs-5">
                  Watch
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link active fs-5">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success m-2 p-0">
                  {" "}
                  <NavLink to="/logine" className="nav-link active fs-5">
                    Logine
                  </NavLink>
                </button>{" "}
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success m-2 p-0">
                  <NavLink to="/singup" className="nav-link active fs-5">
                    sing up
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
