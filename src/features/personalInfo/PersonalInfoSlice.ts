import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonalInfoState {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
}

const initialState: PersonalInfoState = {
  firstName: "Md",
  lastName: "Imran",
  email: "imran@example.com",
  phone: 9999999999,
  address: "123, first street, Bangalore",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    updatePersonalInfo: (
      state,
      action: PayloadAction<Partial<PersonalInfoState>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePersonalInfo } = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
