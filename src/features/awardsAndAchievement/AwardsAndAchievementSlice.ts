import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AwardsAndAchievementEntry {
  awards: string[];
}

interface AwardsAndAchievementState {
  entries: AwardsAndAchievementEntry[];
}

const initialState: AwardsAndAchievementState = { entries: [] };

const awardsAndAchievementSlice = createSlice({
  name: "awardsAndAchievement",
  initialState,
  reducers: {
    addAwardsAndAchievements: (
      state,
      action: PayloadAction<Partial<AwardsAndAchievementEntry>>
    ) => {
      const newAwards: string[] = action.payload.awards || [];
      if (newAwards.length > 0) {
        state.entries.push({ awards: newAwards });
      }
    },
    removeAwardsAndAchievements: (state, action: PayloadAction<number>) => {
      state.entries.splice(action.payload, 1);
    },
  },
});

export const { addAwardsAndAchievements, removeAwardsAndAchievements } =
  awardsAndAchievementSlice.actions;
export default awardsAndAchievementSlice.reducer;
