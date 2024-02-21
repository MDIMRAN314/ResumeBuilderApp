import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EducationEntry {
  from: string;
  to: string;
  institution: string;
  university?: string;
  degree: string;
  stream: string;
  location?: string;
  cgpa?: number;
  descriptions?: string[] | undefined;
}

interface EducationState {
  entries: EducationEntry[];
}

const initialState: EducationState = {
  entries: [],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action: PayloadAction<EducationEntry>) => {
      state.entries.push(action.payload);
    },
    editEducation: (state, action: PayloadAction<{ index: number; entry: EducationEntry }>) => {
      state.entries[action.payload.index] = action.payload.entry;
    },
    deleteEducation: (state, action: PayloadAction<number>) => {
      state.entries.splice(action.payload, 1);
    },
    clearEducation: (state) => {
      state.entries = [];
    },
  },
});

export const { addEducation, editEducation, deleteEducation, clearEducation } = educationSlice.actions;
export default educationSlice.reducer;
