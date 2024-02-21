// SkillsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SkillsEntry {
  skill: string;
}

interface SkillsState {
  entries: SkillsEntry[];
}

const initialState: SkillsState = {
  entries: [],
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<SkillsEntry>) => {
      state.entries.push(action.payload);
    },
    deleteSkill: (state, action: PayloadAction<number>) => {
      state.entries.splice(action.payload, 1);
    },
  },
});

export const { addSkill, deleteSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
