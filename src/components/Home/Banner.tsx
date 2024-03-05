import bannerimg from "../../assets/home-animation.svg";
import bannerimg1 from "../../assets/ResumeBuilder-Homepage-Banner-Update-No-Background-1.webp";
import bannerimg2 from "../../assets/ResumeBuilder-Homepage-Banner-Background-2.webp";
import bannerimg3 from "../../assets/ResumeBuilder-Homepage-Banner-Update-No-Background-3.webp";
import all from "../../assets/black-logo-1.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContextApi } from "../../context/AuthContext";
const Banner = () => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [bannerimg1, bannerimg2, bannerimg3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section className="main-banner-container">
      <main className="bannerContainer">
        <aside className="bannerImg">
          <div className="image-container">
            <img src={bannerimg} alt="bg" className="bgImage" />
            <img
              src={bannerImages[currentBannerIndex]}
              alt={`Banner${currentBannerIndex + 1}`}
              className="frontImage"
            />
          </div>
        </aside>
        <article className="bannerContent">
          <h1>
            The Best Online <br />
            <span>Resume</span> Builder{" "}
          </h1>
          <p className="para">
            Easily create the perfect resume for any job using our best-in-class
            resume builder platform.
          </p>
          <span className="btn-group">
            {foundUser ? (
              <Link to="/resume/resume">
                <button className="create-button">Create My Resume Now</button>
              </Link>
            ) : (
              <Link to="/signin">
                <button className="create-button">Create My Resume Now</button>
              </Link>
            )}
          </span>

          <p className="hirePara">Subscribers have been hired by:</p>
          <div className="marquee-container">
            <img src={all} alt="Marquee" className="marquee-image" />
          </div>
        </article>
      </main>
      <article className="paraAbout">
        <p className="about-para">
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
