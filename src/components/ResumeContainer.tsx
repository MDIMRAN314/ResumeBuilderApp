import React, { useContext } from "react";
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
import AwardsAndAchievementForm from "../features/awardsAndAchievement/AwardsAndAchievementForm";
import NavigationBar from "./Home/NavigationBar";
import { UserContextApi } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ResumeContainer: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;

  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      {/* <CssBaseline /> */}
      {/* <Navbar mode={"light"} toggleColorMode={function (): void {
        throw new Error("Function not implemented.");
      } } /> */}
      {foundUser ? (
        <>
          <NavigationBar foundUser={foundUser} />
          <Box component="main" p={3} sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <Box mt={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={5}>
                  {/* <Paper sx={{ padding: 3, height: "90vh" }} square> */}
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
                  {/* </Paper> */}
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                  <Paper elevation={2} square>
                    <ResumePreview />
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            {/* <Button onClick={downloadResume}>Download Resume</Button> */}
          </Box>
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default ResumeContainer;
