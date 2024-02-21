import React from "react";
import { Box, Button, CssBaseline, Grid, Paper } from "@mui/material";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AccordionForm from "./AccordionForm";
import PersonalInfoForm from "../features/personalInfo/PersonalInfoForm";
import SummaryForm from "../features/summary/SummaryForm";
import WorkExperienceForm from "../features/WorkExperience/WorkExperienceForm";
import EducationForm from "../features/education/EducationForm";
import SkillsForm from "../features/skills/SkillsForm";
import CertificationForm from "../features/certifications/CertificationForm";
import ResumePreview from "./ResumePreview";
import AwardsAndAchievementForm from "../features/awardsAndAchievement/AwardsAndAchievement";
import NavigationBar from "./Home/NavigationBar";
import html2pdf from "html2pdf.js";

const ResumeContainer: React.FC = () => {
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
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      {/* <CssBaseline /> */}
      {/* <Navbar mode={"light"} toggleColorMode={function (): void {
        throw new Error("Function not implemented.");
      } } /> */}
      <NavigationBar />
      <Box component="main" p={3} sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <Box mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              {/* <Paper sx={{ padding: 3, height: "90vh" }} square> */}
              <AccordionForm title="Personal Information">
                <PersonalInfoForm/>
              </AccordionForm>
              <AccordionForm title="Summary">
                <SummaryForm />
              </AccordionForm>
              <AccordionForm title="Work Experience">
                <WorkExperienceForm />
              </AccordionForm>
              <AccordionForm title="Education">
                <EducationForm />
              </AccordionForm>
              <AccordionForm title="Skills">
                <SkillsForm />
              </AccordionForm>
              <AccordionForm title="Award And Recognition">
                <AwardsAndAchievementForm />
              </AccordionForm>
              <AccordionForm title="Certifications">
                <CertificationForm />
              </AccordionForm>
              {/* </Paper> */}
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <Paper elevation={2} square>
                <ResumePreview />
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Button onClick={downloadResume}>Download Resume</Button>
      </Box>
      {/* </LocalizationProvider> */}
    </>
  );
};

export default ResumeContainer;
