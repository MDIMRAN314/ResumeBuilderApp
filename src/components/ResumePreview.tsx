import React from "react";
import {
  Container,
  Box,
  Typography,
  Divider,
  Chip,
  ListItem,
  List,
} from "@mui/material";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { EducationEntry } from "../features/education/EducationSlice";
import { SkillsEntry } from "../features/skills/SkillsSlice";
import { AwardsAndAchievementEntry } from "../features/awardsAndAchievement/AwardsAndAchievementSlice";
import { WorkExperienceEntry } from "../features/WorkExperience/WorkExperienceSlice";
import { CertificationEntry } from "../features/certifications/CertificationSlice";
import { RootState } from "../App/Store";

const ResumePreview: React.FC = () => {
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
      <Box id="resume-builder" p={2}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="primary.dark">
            {personalInfo?.firstName} {personalInfo?.lastName}
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Typography variant="subtitle1">{personalInfo.email}</Typography>|
          <Typography variant="subtitle1">{personalInfo.phone}</Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          {personalInfo?.address}
        </Typography>
        <Divider />

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color={"primary.dark"}>
            Career Objective
          </Typography>
          <Typography>{summary.summary}</Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="primary.dark">
            Work Experience
          </Typography>
          {workExperience.entries.map(
            (entry: WorkExperienceEntry, index: number) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                {dayjs(entry.start_date).format("MMM YYYY")} -{" "}
                {dayjs(entry.end_date).format("MMM YYYY")} {entry.designation}
                {entry.company}, {entry.location}
                <List>
                  {Array.isArray(entry.roleDescription) &&
                    entry.roleDescription.map(
                      (description: string, idx: number) => (
                        <ListItem key={idx}>{description}</ListItem>
                      )
                    )}
                </List>
              </Typography>
            )
          )}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color={"primary.dark"}>
            Education
          </Typography>
          {education.entries.map((entry: EducationEntry, index: number) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>
              {dayjs(entry.from).format("MMM YYYY")} -{" "}
              {dayjs(entry.to).format("MMM YYYY")}: {entry.institution},{" "}
              {entry.degree}, {entry.stream}, {entry.location}, CGPA:{" "}
              {entry.cgpa}
              <List>
                {Array.isArray(entry.descriptions) &&
                  entry.descriptions.map((description: string, idx: number) => (
                    <ListItem key={idx}>{description}</ListItem>
                  ))}
              </List>
            </Typography>
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color={"primary.dark"}>
            Skills
          </Typography>
          {skills.entries.map((entry: SkillsEntry, index: number) => {
            return <Chip label={entry.skill} key={index} />;
          })}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color={"primary.dark"}>
            Awards and Recognition
          </Typography>
          {awardsAndAchievement.entries.map(
            (entry: AwardsAndAchievementEntry, index: number) => (
              <li key={index}>{entry.awards}</li>
            )
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color={"primary.dark"}>
            Certification
          </Typography>
          {certification.entries.map(
            (entry: CertificationEntry, index: number) => (
              <li key={index}>{entry.certificate}</li>
            )
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ResumePreview;