import { Chip, Stack } from "@mui/material";
import { RootState } from "../../App/Store";
import React from "react";
import { useSelector } from "react-redux";
import { CertificationEntry } from "../../features/certifications/CertificationSlice";
import { SkillsEntry } from "../../features/skills/SkillsSlice";
import { AwardsAndAchievementEntry } from "../../features/awardsAndAchievement/AwardsAndAchievementSlice";
import { EducationEntry } from "../../features/education/EducationSlice";
import dayjs from "dayjs";
import { WorkExperienceEntry } from "../../features/WorkExperience/WorkExperienceSlice";

const Template_01: React.FC = () => {
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
      <div
        id="/resume/resume_1"
        className="resume w-[100%] px-10 text-justify border-t-orange-600 border-t-[2rem] shadow-md pb-8"
      >
        <header className="resume-header p-5 border-b-2">
          <h1 className="text-center text-3xl">
            {personalInfo?.firstName} {personalInfo?.lastName}
          </h1>
          <ul className="contact-info flex gap-5 justify-center">
            <li> {personalInfo?.address}</li> |<li>{personalInfo?.phone}</li> |
            <li> {personalInfo?.email}</li>
          </ul>
        </header>
        <section className="summary pt-6">
          <h2 className="text-2xl underline pb-5">Summary</h2>
          <p>{summary?.summary}</p>
        </section>
        <section className="experience">
          <h2 className="text-2xl underline py-5">Experience</h2>
          {workExperience?.entries?.map(
            (entry: WorkExperienceEntry, index: number) => (
              <div key={index + 10} className="position">
                <h3 className="text-xl pb-1">{entry?.roleDescription}</h3>
                <p>
                  {dayjs(entry.start_date).format("MMM YYYY")} -{" "}
                  {dayjs(entry.end_date).format("MMM YYYY")}
                </p>
                <p>{entry.designation}, {entry.company} - {entry.location}</p>  
                <ul className="list-disc pb-4">
                  {Array.isArray(entry.roleDescription) &&
                    entry.roleDescription.map(
                      (description: string, idx: number) => (
                        <li key={idx}>{description}</li>
                      )
                    )}
                </ul>
              </div>
            )
          )}
        </section>
        <section className="education">
          <h2 className="text-2xl underline py-5">Education</h2>
          {education?.entries?.map((entry: EducationEntry, index: number) => (
            <div className="education-item" key={index}>
              <h3>{entry.degree}</h3>
              <h4>
                {entry.institution}, {entry.location}
              </h4>
              <p className="pb-[1rem]">
                {dayjs(entry.from).format("MMM YYYY")} -{" "}
                {dayjs(entry.to).format("MMM YYYY")}
              </p>
            </div>
          ))}
        </section>

        <section className="awards">
          <h2 className="text-2xl underline py-5">Awards</h2>
          {awardsAndAchievement.entries.map(
            (entry: AwardsAndAchievementEntry, index: number) => (
              <ul className="list-disc" key={index}>
                <li>{entry.awards}</li>
              </ul>
            )
          )}
        </section>

        <section className="skills">
          <h2 className="text-2xl underline py-5">Skills</h2>
          <Stack direction="row" spacing={2}>
            {skills.entries.map((entry: SkillsEntry, index: number) => {
              return <Chip label={entry.skill} key={index} />;
            })}
          </Stack>
        </section>

        <section className="certificate">
          <h2 className="text-2xl underline py-5">Certificate</h2>
          <ul className="list-disc">
            {certification.entries.map(
              (entry: CertificationEntry, index: number) => (
                <li key={index}>{entry.certificate}</li>
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template_01;
