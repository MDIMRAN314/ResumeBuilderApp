import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import { RootState } from "../../../src/App/Store";
import { updatePersonalInfo } from "./PersonalInfoSlice";

const PersonalInfoForm: React.FC = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state: RootState) => state.personalInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updatePersonalInfo({ [name]: value }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            size="small"
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            sx={{ width: "40%" }}
            margin="normal"
            value={personalInfo.firstName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            sx={{ width: "55%" }}
            margin="normal"
            value={personalInfo.lastName}
            onChange={handleChange}
          />
        </Box>
        <TextField
          size="small"
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={personalInfo.email}
          onChange={handleChange}
        />
        <TextField
          size="small"
          id="phone"
          name="phone"
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={personalInfo.phone}
          onChange={handleChange}
        />
        <TextField
          size="small"
          id="address"
          name="address"
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={personalInfo.address}
          onChange={handleChange}
        />
      </form>
    </Box>
  );
};

export default PersonalInfoForm;
