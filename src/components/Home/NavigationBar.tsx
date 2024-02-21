import { Link } from "react-router-dom";
import logo from "../../assets/reslogo2.jpg";
import { PayloadProps } from "../../types/PayloadType";
import html2pdf from "html2pdf.js";

export interface FoundUserType {
  foundUser: PayloadProps | null | undefined;
}
const NavigationBar = ({ foundUser }: FoundUserType) => {
  const downloadResume = () => {
    const element = document.getElementById("resume-builder");
    if (element) {
      html2pdf(element, {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      });
    }
  };

  return (
    <>
      {!foundUser ? (
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
          </nav>
        </div>
      ) : (
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
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>

            <div className="create-btn">
              <Link to="/resume">
                <button onClick={downloadResume}>Download Resume</button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavigationBar;
