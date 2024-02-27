import { Rating } from "@mui/material";
import logo from "../../assets/reslogo2.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const section_1 = [
    "Build Your Resume",
    "Basic Resume Examples",
    "How To Write a Resume",
    "Resume Builder App",
    "Resume Examples",
    "Resume Templates",
  ];

  const section_2 = [
    "Career Resources",
    "Cover Letter Examples",
    "How To Write a Cover Letter",
    "Job Search Resource Center",
    "Thank You Note Examples",
  ];

  const section_3 = [
    "About Resume Builder",
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Press",
  ];

  return (
    <>
      <footer id="footer-section">
        <article className="section-1">
          <figure className="figureContainer">
            <img className="figure" src={logo} />
          </figure>
          <Rating name="read-only" size="large" color="success" />
          <article className="social-links">
            <InstagramIcon fontSize="large" />
            <XIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
          </article>
        </article>
        <article className="section-2">
          <h1>{section_1[0]}</h1>
          {section_1.map((heading) => (
            <p key={heading}>{heading}</p>
          ))}
        </article>
        <article className="section-3">
          <h1>{section_2[0]}</h1>
          {section_2.map((heading) => (
            <p key={heading}>{heading}</p>
          ))}
        </article>
        <article className="section-4">
          <h1>{section_3[0]}</h1>
          {section_3.map((heading) => (
            <p key={heading}>{heading}</p>
          ))}
        </article>
      </footer>
      <h3 className="copyRight" >Copyright &copy; 2024 All rights reserved ResumeBuilder.com</h3>
    </>
  );
};

export default Footer;
