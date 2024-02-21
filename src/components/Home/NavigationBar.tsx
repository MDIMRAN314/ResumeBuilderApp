import { Link } from "react-router-dom";
import logo from "../../assets/reslogo2.jpg";

const NavigationBar = () => {
  return (
    <div id="navContainer">
      <nav id="fullNavbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="menu">
          <ul className="nav-content">
            <li>
              <Link to="/">Resume Examples</Link>
            </li>
            <li>
              <Link to="/">Cover Letter Examples</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </div>

        <div className="create-btn">
          <Link to="/resume">
            <button>Build My Resume</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
