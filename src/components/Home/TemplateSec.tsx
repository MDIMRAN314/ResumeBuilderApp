import { Link } from "react-router-dom";
import re1 from "../../assets/re1.png";
import re2 from "../../assets/re2.jpg";
import re3 from "../../assets/re3.jpg";
import "./scss/partials/_template.scss";

const TemplateSec = () => {
  return (
    <section className="tempContainer">
      <h1 className="template-heading">
        Pick one of many world-class templates and build your resume in minutes
      </h1>

      <div className="templates">
        <div className="card">
          <Link to="/resume/resume">
            <img src={re3} alt="" />
          </Link>
        </div>
        <div className="card">
          <Link to="/resume/resume_1">
            <img src={re1} alt="" />
          </Link>
        </div>
        <div className="card">
          <Link to="/resume/resume_2">
            <img src={re2} alt="" />
          </Link>
        </div>
        <div className="card">
          <Link to="/resume/resume_3">
            <img src={re3} alt="" />
          </Link>
        </div>
      </div>

      {/* <div className="temp-btn">
        <button>See All Templates</button>
      </div> */}
    </section>
  );
};

export default TemplateSec;
