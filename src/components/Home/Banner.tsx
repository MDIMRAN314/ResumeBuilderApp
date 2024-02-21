import bannerimg from "../../assets/resumebanner.png";
import all from "../../assets/all.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContextApi } from "../../context/AuthContext";

const Banner = () => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;

  return (
    <section className="main-banner-container">
      <main className="bannerContainer">
        <aside className="bannerImg">
          <img src={bannerimg} alt="Banner" />
        </aside>
        <article className="bannerContent">
          <h1>
            The Best Online <span>Resume</span> Builder{" "}
          </h1>
          <p className="para">
            Easily create the perfect resume for any job using our best-in-class
            resume builder platform.
          </p>
          {foundUser ? (
            <Link to="/resume">
              <button>Create My Resume Now</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Create My Resume Now</button>
            </Link>
          )}
          <p className="hirePara">Subscribers have been hired by:</p>
          <div className="marqueeContainer">
            <img src={all} alt="" className="marqueeImage" />
          </div>
        </article>
      </main>
      <article className="paraAbout">
        <p>
          Our online resume builder offers a quick and easy way to create your
          professional resume from over 30 design templates. Create a resume
          using our AI-powered online resume wizard, plus take advantage of
          expert suggestions and customizable modern and professional resume
          templates. Free users have access to our easy-to-use tool and TXT file
          downloads.
        </p>
      </article>
    </section>
  );
};

export default Banner;
