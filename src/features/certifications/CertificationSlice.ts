import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CertificationEntry {
  certificate: string[];
}

interface CertificationState {
  entries: CertificationEntry[];
}
const initialState: CertificationState = { entries: [] };

const certificationSlice = createSlice({
  name: "certification",
  initialState,
  reducers: {
    addCertifications: (
      state,
      action: PayloadAction<Partial<CertificationEntry>>
    ) => {
      const newCertifications: string[] = action.payload.certificate || [];
      if (newCertifications.length > 0) {
        state.entries.push({ certificate: newCertifications });
      }
    },
    removeCertifications: (state, action: PayloadAction<number>) => {
      state.entries.splice(action.payload, 1);
    },
  },
});

export const { addCertifications, removeCertifications } =
  certificationSlice.actions;
export default certificationSlice.reducer;
