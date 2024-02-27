import { Box, Button, Container, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import PublicIcon from "@mui/icons-material/Public";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useSelector } from "react-redux";
import { RootState } from "../../App/Store";
import { SkillsEntry } from "../../features/skills/SkillsSlice";
import { WorkExperienceEntry } from "../../features/WorkExperience/WorkExperienceSlice";
import dayjs from "dayjs";
import { EducationEntry } from "../../features/education/EducationSlice";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { AwardsAndAchievementEntry } from "../../features/awardsAndAchievement/AwardsAndAchievementSlice";
import html2pdf from "html2pdf.js";

const Templete_03 = () => {
  const personalInfo = useSelector((state: RootState) => state.personalInfo);
  const education = useSelector((state: RootState) => state.education);
  const workExperience = useSelector(
    (state: RootState) => state.workExperience
  );
  const summary = useSelector((state: RootState) => state.summary);
  const skills = useSelector((state: RootState) => state.skill);
  const awardsAndAchievement = useSelector(
    (state: RootState) => state.awardsAndAchievement
  );
  const certification = useSelector((state: RootState) => state.certification);

  return (
    <Container>
      <Box>
        <div id="/resume/resume_3" className="temp2-main-container">
          <div className="temp2-container">
            <Paper className="temp2-content">
              {/* left content section */}
              <div className="temp2-left-content">
                <div className="temp2-left-profile">
                  <div className="temp2-fname">{personalInfo?.firstName}</div>
                  <div className="temp2-lname">{personalInfo?.lastName}</div>
                  <hr />
                  {/* <div className="temp2-desg">Web Developer</div> */}
                  <div className="temp2-loc">
                    <span>
                      <LocationOnIcon />
                    </span>
                    <span>{personalInfo?.address}</span>
                  </div>
                  <div className="temp2-phone">
                    <span>
                      <LocalPhoneIcon />
                    </span>
                    <span>{personalInfo?.phone}</span>
                  </div>
                  <div className="temp2-mail">
                    <span>
                      <MailIcon />
                    </span>
                    <span>{personalInfo?.email}</span>
                  </div>
                </div>

                {/* skills section */}
                <div className="temp2-left-skills">
                  <div className="temp2-skill-heading">
                    <span>
                      <PsychologyIcon />
                    </span>
                    <span>Skills</span>
                  </div>
                  {skills.entries.map((entry: SkillsEntry, index: number) => {
                    return (
                      <div className="temp2-skill" key={index}>
                        {entry.skill}
                      </div>
                    );
                  })}
                </div>

                {/* Awards */}
                <div className="temp2-left-skills">
                  <div className="temp2-skill-heading">
                    <span>
                      <AddModeratorIcon />
                    </span>
                    <span>Awards</span>
                  </div>
                  {awardsAndAchievement.entries.map(
                    (entry: AwardsAndAchievementEntry, index: number) => (
                      <div className="temp2-skill" key={index}>
                        {entry.awards}
                      </div>
                    )
                  )}
                  {skills.entries.map((entry: SkillsEntry, index: number) => {
                    return (
                      <div className="temp2-skill" key={index}>
                        {entry.skill}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 
                languages section
                <div className="temp2-left-lang">
                  <div className="temp2-lang-heading">
                    <span>
                      <PublicIcon />
                    </span>
                    <span>Languages</span>
                  </div>
                  <div className="temp2-lang">English</div>
                  <div className="temp2-lang">French</div>
                </div> */}

              {/* quote section */}
              {/* <div className="temp2-left-quote">
                  <div className="temp2-quote-heading">
                    <span>
                      <FormatQuoteIcon />
                    </span>
                    <span>Favorite Quote</span>
                  </div>
                  <div className="temp2-quote">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, tempora?
                  </div>
                </div>
              </div> */}

              {/* right content section */}
              <div className="temp2-right-content">
                {/* about section */}
                <div className="temp2-about-content">
                  <p>{summary.summary}</p>
                </div>

                {/* professional experience section */}
                <div className="temp2-exp">
                  <div className="temp2-comp-heading">
                    <span>
                      <BusinessCenterIcon />
                    </span>
                    <span>Professional Experience</span>
                  </div>
                  <div className="temp2-exp-detail">
                    {workExperience?.entries?.map(
                      (entry: WorkExperienceEntry, index: number) => (
                        <div key={index + 10} className="temp2-exp-detail">
                          <div className="temp2-comp-post">
                            <div className="temp2-comp">{entry?.company}</div>
                            <span>,</span>
                            <div className="temp2-post">
                              {entry?.roleDescription}
                            </div>
                          </div>
                          <div className="temp2-year-place">
                            <div className="year">
                              <p>{dayjs(entry.start_date).format("MM/YYYY")}</p>
                            </div>
                            <span>|</span>
                            <div className="place">
                              {entry.end_date
                                ? "present"
                                : dayjs(entry.end_date).format("MM/YYYY")}
                            </div>
                          </div>
                          <div className="temp2-exp-content">
                            <ul>
                              {entry.roleDescription?.map(
                                (description: string, idx: number) => (
                                  <li key={idx}>{description}</li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* education section*/}
                <div className="temp2-edu">
                  <div className="temp2-edu-heading">
                    <span>
                      <SchoolIcon />
                    </span>
                    <span>Education</span>
                  </div>
                  <div className="temp2-edu-detail">
                    {education?.entries?.map(
                      (entry: EducationEntry, index: number) => (
                        <div key={index} className="temp2-education-item">
                          <div className="temp2-course-place">
                            <div>{entry.degree}</div>
                            <div>{entry.institution}</div>
                          </div>
                          <div className="temp2-year-place">
                            <div className="year">
                              <p>{dayjs(entry.from).format("MM/YYYY")}</p>
                            </div>
                            <span>-</span>
                            <div className="place">
                              {dayjs(entry.to).format("MM/YYYY")}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* interests section */}
                {/* <div className="temp2-interests">
                  <div className="temp2-interest-heading">
                    <span>
                      <InterestsIcon />
                    </span>
                    <span>Interests</span>
                  </div>
                  <div className="temp2-interest-content">
                    <button>Travelling</button>
                    <button>Reading</button>
                  </div>
                </div> */}
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Templete_03;
