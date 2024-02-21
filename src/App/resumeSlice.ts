// resumeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ResumeState {
  resume: any; // Adjust the type according to your resume structure
}

const initialState: ResumeState = {
  resume: {},
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume: (state, action: PayloadAction<any>) => {
      state.resume = action.payload;
    },
  },
});

export const { setResume } = resumeSlice.actions;
export default resumeSlice.reducer;

// Add this reducer to your rootReducer
