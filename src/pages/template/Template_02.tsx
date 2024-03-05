// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import MailIcon from "@mui/icons-material/Mail";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import SchoolIcon from "@mui/icons-material/School";
// import BadgeIcon from "@mui/icons-material/Badge";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import { useSelector } from "react-redux";
// import { RootState } from "../../App/Store";
// import { WorkExperienceEntry } from "../../features/WorkExperience/WorkExperienceSlice";
// import dayjs from "dayjs";
// import { EducationEntry } from "../../features/education/EducationSlice";
// import { AwardsAndAchievementEntry } from "../../features/awardsAndAchievement/AwardsAndAchievementSlice";
// import { CertificationEntry } from "../../features/certifications/CertificationSlice";
// import { SkillsEntry } from "../../features/skills/SkillsSlice";
// import { AutoAwesomeMosaicRounded } from "@mui/icons-material";

// const Template_02: React.FC = () => {
//   const personalInfo = useSelector((state: RootState) => state.personalInfo);
//   const education = useSelector((state: RootState) => state.education);
//   const workExperience = useSelector(
//     (state: RootState) => state.workExperience
//   );
//   const summary = useSelector((state: RootState) => state.summary);
//   const skills = useSelector((state: RootState) => state.skill);
//   const awardsAndAchievement = useSelector(
//     (state: RootState) => state.awardsAndAchievement
//   );
//   const certification = useSelector((state: RootState) => state.certification);

//   return (
//     <div>
//       <div id="/resume/resume_3" className="temp1-main-container">
//         <div className="temp1-container">
//           {/* name-designation section */}
//           <div className="temp1-name-container">
//             <h4 className="temp1-name">
//               {personalInfo?.firstName} {personalInfo?.lastName}
//             </h4>
//           </div>

//           {/* address-insta section */}
//           <div className="add-insta">
//             <div className="add">
//               <span>
//                 <LocationOnIcon />
//               </span>
//               <span>{personalInfo?.address}</span>
//             </div>
//             {/* <div className="insta">
//                 <span>
//                   <InstagramIcon />
//                 </span>
//                 <span>bale2345</span>
//               </div> */}
//           </div>

//           {/*mail-phone section */}
//           <div className="contact">
//             <div className="mail">
//               <span>
//                 <MailIcon />
//               </span>
//               <span>{personalInfo?.email}</span>
//             </div>
//             <div className="phone">
//               <span>
//                 <LocalPhoneIcon />
//               </span>
//               <span>{personalInfo.phone}</span>
//             </div>
//           </div>

//           {/*profile section */}
//           <div className="profile">
//             <div className="profile-heading">
//               <span>
//                 <AccountBoxIcon />
//               </span>
//               <span>
//                 <h4>Profile</h4>
//               </span>
//             </div>
//             <div className="profile-content">
//               <span>{summary.summary}</span>
//             </div>
//           </div>

//           {/* professional Experience section */}
//           <div className="prof-exp">
//             <div className="prof-exp-heading">
//               <span>
//                 <BusinessCenterIcon />
//               </span>
//               <span>
//                 <h4>Professional Experience</h4>
//               </span>
//             </div>
//             <div className="profile-content">
//               {workExperience.entries.map(
//                 (entry: WorkExperienceEntry, index: number) => (
//                   <div className="profile-content-sub" key={index}>
//                     <div className="company-details">
//                       <div className="comp-name-post">
//                         <div className="comp-name">
//                           <h5>{entry.company},</h5>
//                         </div>
//                         <div className="comp-post">
//                           <h5>{entry.designation}</h5>
//                         </div>
//                       </div>
//                       <div className="comp-year-place">
//                         <div className="comp-year">
//                           <h5>
//                             {dayjs(entry.start_date).format("YYYY")}-
//                             {dayjs(entry.end_date).format("YYYY")}
//                           </h5>
//                         </div>
//                         <span>|</span>
//                         <div className="comp-place">
//                           <h5>{entry.location}</h5>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="exp-desc">
//                       {Array.isArray(entry.roleDescription) &&
//                         entry.roleDescription.map(
//                           (description: string, idx: number) => (
//                             <p key={idx}>{description}</p>
//                           )
//                         )}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* education section */}
//           <div className="education">
//             <div className="edu-heading">
//               <span>
//                 <SchoolIcon />
//               </span>
//               <span>
//                 <h4>Education</h4>
//               </span>
//             </div>
//             <div className="edu-details">
//               {education.entries.map((entry: EducationEntry, index: number) => (
//                 <div className="edu-details" key={index}>
//                   <div className="edu-course-institute">
//                     <div className="edu-course">
//                       <h5>{entry.degree},</h5>
//                     </div>
//                     <div className="edu-institute">
//                       <span>{entry.institution}</span>
//                     </div>
//                   </div>
//                   <div className="edu-year-place">
//                     <div className="edu-year">
//                       <h5>
//                         {dayjs(entry.from).format("YYYY")}-
//                         {dayjs(entry.to).format("YYYY")}
//                       </h5>
//                     </div>
//                     <span>|</span>
//                     <div className="edu-place">
//                       <h5>{entry.location}</h5>
//                     </div>
//                   </div>
//                   <div className="edu-cgpa">
//                     <span>CGPA: {entry.cgpa}</span>
//                   </div>
//                   <div className="edu-descriptions">
//                     {Array.isArray(entry.descriptions) &&
//                       entry.descriptions.map(
//                         (description: string, idx: number) => (
//                           <p key={idx}>{description}</p>
//                         )
//                       )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* certificates section */}
//           <div className="certificates">
//             <div className="cert-heading">
//               <span>
//                 <BadgeIcon />
//               </span>
//               <span>
//                 <h4>Certificates</h4>
//               </span>
//             </div>
//             <div className="cert-details">
//               <div className="cert-course">
//                 {certification.entries.map(
//                   (entry: CertificationEntry, index: number) => (
//                     <div className="cert-course-content" key={index}>
//                       <span>{entry.certificate}</span>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>

//           {/*skills section */}
//           <div className="skills">
//             <div className="skill-heading">
//               <span>
//                 <PsychologyIcon />
//               </span>
//               <span>
//                 <h4>Skills</h4>
//               </span>
//             </div>
//             <div className="skill-details">
//               <div className="skill-course">
//                 {skills.entries.map((entry: SkillsEntry, index: number) => (
//                   <div className="skill-content" key={index}>
//                     <span>{entry.skill}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/*awards section */}
//           <div className="skills">
//             <div className="skill-heading">
//               <span>
//                 <AutoAwesomeMosaicRounded />
//               </span>
//               <span>
//                 <h4>Awards</h4>
//               </span>
//             </div>
//             <div className="skill-details">
//               <div className="skill-course">
//                 {awardsAndAchievement.entries.map(
//                   (entry: AwardsAndAchievementEntry, index: number) => (
//                     <div className="award-content" key={index}>
//                       <span>{entry.awards}</span>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template_02;



import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useSelector } from "react-redux";
import { RootState } from "../../App/Store";
import { WorkExperienceEntry } from "../../features/WorkExperience/WorkExperienceSlice";
import dayjs from "dayjs";
import { EducationEntry } from "../../features/education/EducationSlice";
import { AwardsAndAchievementEntry } from "../../features/awardsAndAchievement/AwardsAndAchievementSlice";
import { CertificationEntry } from "../../features/certifications/CertificationSlice";
import { SkillsEntry } from "../../features/skills/SkillsSlice";
import { AutoAwesomeMosaicRounded } from "@mui/icons-material";

const Template_02: React.FC = () => {
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
    <div>
      <div id="/resume/resume_3" className="temp1-main-container">
        <div className="temp1-container">
          {/* name-designation section */}
          <div className="temp1-name-container">
            <h4 className="temp1-name">
              {personalInfo?.firstName} {personalInfo?.lastName}
            </h4>
          </div>

          {/* address-insta section */}
          <div className="add-insta">
            <div className="add">
              <span>
                <LocationOnIcon />
              </span>
              <span>{personalInfo?.address}</span>
            </div>
          </div>

          {/*mail-phone section */}
          <div className="contact">
            <div className="mail">
              <span>
                <MailIcon />
              </span>
              <span>{personalInfo?.email}</span>
            </div>
            <div className="phone">
              <span>
                <LocalPhoneIcon />
              </span>
              <span>{personalInfo.phone}</span>
            </div>
          </div>

          {/*profile section */}
          <div className="profile">
            <div className="profile-heading">
              <span>
                <AccountBoxIcon />
              </span>
              <span>
                <h4>Profile</h4>
              </span>
            </div>
            <div className="profile-content">
              <span>{summary.summary}</span>
            </div>
          </div>

          {/* professional Experience section */}
          <div className="prof-exp">
            <div className="prof-exp-heading">
              <span>
                <BusinessCenterIcon />
              </span>
              <span>
                <h4>Professional Experience</h4>
              </span>
            </div>
            <div className="profile-content">
              {workExperience.entries.map(
                (entry: WorkExperienceEntry, index: number) => (
                  <div className="profile-content-sub" key={index}>
                    <div className="company-details">
                      <div className="comp-name-post">
                        <div className="comp-name">
                          <h5>{entry.company},</h5>
                        </div>
                        <div className="comp-post">
                          <h5>{entry.designation}</h5>
                        </div>
                      </div>
                      <div className="comp-year-place">
                        <div className="comp-year">
                          <h5>
                            {dayjs(entry.start_date).format("YYYY")}-
                            {dayjs(entry.end_date).format("YYYY")}
                          </h5>
                        </div>
                        <span>|</span>
                        <div className="comp-place">
                          <h5>{entry.location}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="exp-desc">
                      {Array.isArray(entry.roleDescription) &&
                        entry.roleDescription.map(
                          (description: string, idx: number) => (
                            <p key={idx}>{description}</p>
                          )
                        )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* education section */}
          <div className="education">
            <div className="edu-heading">
              <span>
                <SchoolIcon />
              </span>
              <span>
                <h4>Education</h4>
              </span>
            </div>
            <div className="edu-details">
              {education.entries.map((entry: EducationEntry, index: number) => (
                <div className="edu-details" key={index}>
                  <div className="edu-course-institute">
                    <div className="edu-course">
                      <h5>{entry.degree},</h5>
                    </div>
                    <div className="edu-institute">
                      <span>{entry.institution}</span>
                    </div>
                  </div>
                  <div className="edu-year-place">
                    <div className="edu-year">
                      <h5>
                        {dayjs(entry.from).format("YYYY")}-
                        {dayjs(entry.to).format("YYYY")}
                      </h5>
                    </div>
                    <span>|</span>
                    <div className="edu-place">
                      <h5>{entry.location}</h5>
                    </div>
                  </div>
                  <div className="edu-cgpa">
                    <span>CGPA: {entry.cgpa}</span>
                  </div>
                  <div className="edu-descriptions">
                    {Array.isArray(entry.descriptions) &&
                      entry.descriptions.map(
                        (description: string, idx: number) => (
                          <p key={idx}>{description}</p>
                        )
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* certificates section */}
          <div className="certificates">
            <div className="cert-heading">
              <span>
                <BadgeIcon />
              </span>
              <span>
                <h4>Certificates</h4>
              </span>
            </div>
            <div className="cert-details">
              <div className="cert-course">
                {certification.entries.map(
                  (entry: CertificationEntry, index: number) => (
                    <div className="cert-course-content" key={index}>
                      <span>{entry.certificate}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/*skills section */}
          <div className="skills">
            <div className="skill-heading">
              <span>
                <PsychologyIcon />
              </span>
              <span>
                <h4>Skills</h4>
              </span>
            </div>
            <div className="skill-details">
              <div className="skill-course">
                {skills.entries.map((entry: SkillsEntry, index: number) => (
                  <div className="skill-content" key={index}>
                    <span>{entry.skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*awards section */}
          <div className="skills">
            <div className="skill-heading">
              <span>
                <AutoAwesomeMosaicRounded />
              </span>
              <span>
                <h4>Awards</h4>
              </span>
            </div>
            <div className="skill-details">
              <div className="skill-course">
                {awardsAndAchievement.entries.map(
                  (entry: AwardsAndAchievementEntry, index: number) => (
                    <div className="award-content" key={index}>
                      <span>{entry.awards}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template_02;
