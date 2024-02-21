import { Link } from "react-router-dom";
import re1 from "../../assets/resume1.svg";
import re2 from "../../assets/resume2.svg";
import "./scss/partials/_template.scss";

const TemplateSec = () => {
  return (
    <section className="tempContainer">
      <div className="tempHeading">
        <h1 className="h1">
          Pick one of many world-class templates and build your resume in
          minutes
        </h1>
      </div>

      <main className="templates">
        <div>
          <Link to="/">
            <img src={re1} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={re2} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={re1} alt="" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={re1} alt="" />
          </Link>
        </div>
      </main>

      <div className="temp-btn">
        <button>See All Templates</button>
      </div>
    </section>
  );
};

export default TemplateSec;