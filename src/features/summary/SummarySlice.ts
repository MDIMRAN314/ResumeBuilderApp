import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SummaryState {
  summary: string;
}

const initialState: SummaryState = {
  summary: "",
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    updateSummary: (state, action: PayloadAction<Partial<SummaryState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateSummary } = summarySlice.actions;
export default summarySlice.reducer;
