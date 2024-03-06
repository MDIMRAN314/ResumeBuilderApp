import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/reslogo2.jpg";
import html2pdf from "html2pdf.js";
// import { PayloadProps } from "./../../types/PayloadType";
import toast from "react-hot-toast";

export interface FoundUserType {
  foundUser: string | null | undefined;
}

const NavigationBar: React.FC<FoundUserType> = ({ foundUser }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    window.localStorage.removeItem("login");
    window.location.reload();
    toast.success("Logged out successfully");
  };

  //* to download the resume using html2pdf
  const downloadResume = async () => {
    const element = document.getElementById(pathname);
    if (element) {
      html2pdf(element, {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      });
    }
  };

  const renderGuestLinks = () => (
    <ul className="nav-content">
      <li>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/">Resume Templates</Link>
      </li>
      <li>
        <Link to="/">Cover Letters</Link>
      </li>
      <li>
        <Link to="/signin">Login</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  );

  const renderUserLinks = () => (
    <ul className="nav-content">
      <li>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/">Resume Templates</Link>
      </li>
      <li>
        <Link to="/">Cover Letters</Link>
      </li>
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
      <li className="create-btn">
        {pathname.includes("/resume/resume") && (
          <button onClick={downloadResume}>Download Resume</button>
        )}
      </li>
      {/* <li>Hi, {foundUser?.firstName}</li> */}
    </ul>
  );

  return (
    <div id="navContainer">
      <nav id="fullNavbar">
        <div className="menu">
          {foundUser ? renderUserLinks() : renderGuestLinks()}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
