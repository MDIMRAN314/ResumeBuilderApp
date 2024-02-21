import React from "react";
import { Box, CssBaseline, Grid, Paper } from "@mui/material";
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

const ResumeContainer: React.FC = () => {
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
              <Grid item xs={12} md={6} lg={3.5}>
                <Paper elevation={3} sx={{ padding: 3, height: "90vh" }}>
                  <AccordionForm title="Personal Information">
                    <PersonalInfoForm />
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
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={8.5}>
                <Paper
                  elevation={3}
                  sx={{ padding: 3, minHeight: "100%" }}
                  square
                >
                  <ResumePreview />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      {/* </LocalizationProvider> */}
    </>
  );
};

export default ResumeContainer;
