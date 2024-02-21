// userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../components/App/Store";
import axios from "axios";
import { setResume } from "../resume/resumeSlice";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials: { email: string; password: string }, { dispatch }) => {
    // Make your login request here and handle the response
    const response = await axios.post("/login", credentials);

    // Assume the response includes user data and resume data
    const { user, resume } = response.data;

    // Dispatch the user data to the user slice
    dispatch(setUser(user));

    // Dispatch the resume data to the resume slice
    dispatch(setResume(resume));
  }
);

interface UserState {
  user: any; // Adjust the type according to your user structure
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    // Add other user-related reducers as needed
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// Add this reducer to your rootReducer
