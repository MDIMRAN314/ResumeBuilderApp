import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WorkExperienceEntry {
  start_date: string;
  end_date?: string;
  designation: string;
  company: string;
  location?: string;
  roleDescription?: string[];
}

interface WorkExperienceState {
  entries: WorkExperienceEntry[];
}

const initialState: WorkExperienceState = {
  entries: [],
};

const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    addWorkExperience: (state, action: PayloadAction<WorkExperienceEntry>) => {
      state.entries.push(action.payload);
    },
    editWorkExperience: (
      state,
      action: PayloadAction<{ index: number; entry: WorkExperienceEntry }>
    ) => {
      const { index, entry } = action.payload;
      state.entries[index] = entry;
    },
    deleteWorkExperience: (state, action: PayloadAction<number>) => {
      state.entries.splice(action.payload, 1);
    },
    clearWorkExperience: (state) => {
      state.entries = [];
    },
  },
});

export const {
  addWorkExperience,
  editWorkExperience,
  deleteWorkExperience,
  clearWorkExperience,
} = workExperienceSlice.actions;
export default workExperienceSlice.reducer;