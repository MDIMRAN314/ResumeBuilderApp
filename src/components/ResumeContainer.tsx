import React, { useContext } from "react";
import { Box, CssBaseline, Grid } from "@mui/material";
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
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const ResumeContainer: React.FC = () => {
  const { pathname } = useLocation();
  // console.log(pathname);

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
                </Grid>
                <Grid item xs={12} md={6} lg={7}>
                    {pathname === "/resume/resume" ? <ResumePreview /> : <Outlet />}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default ResumeContainer;
