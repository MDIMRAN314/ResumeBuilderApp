import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import personalInfoReducer from "../features/personalInfo/PersonalInfoSlice";
import educationReducer from "../features/education/EducationSlice";
import workExperienceReducer from "../features/WorkExperience/WorkExperienceSlice";
import summaryReducer from "../features/summary/SummarySlice";
import skillReducer from '../features/skills/SkillsSlice';
import awardsAndAchievementReducer from '../features/awardsAndAchievement/AwardsAndAchievementSlice';
import certificationReducer from '../features/certifications/CertificationSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    education: educationReducer,
    workExperience: workExperienceReducer,
    summary: summaryReducer,
    skill: skillReducer,
    awardsAndAchievement: awardsAndAchievementReducer,
    certification: certificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
