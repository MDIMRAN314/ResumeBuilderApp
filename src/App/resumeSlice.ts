import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResumeState {
  resume: object
}[];

const initialState: ResumeState = {
  resume: {},
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResume: (state, action: PayloadAction<object>) => {
      state.resume = action.payload;
    },
  },
});

export const { setResume } = resumeSlice.actions;
export default resumeSlice.reducer;