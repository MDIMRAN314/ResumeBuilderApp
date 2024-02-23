// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Box, TextField } from "@mui/material";
// import { RootState } from "../../../src/App/Store";
// import { updatePersonalInfo } from "./PersonalInfoSlice";

// const PersonalInfoForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const personalInfo = useSelector((state: RootState) => state.personalInfo);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     dispatch(updatePersonalInfo({ [name]: value }));
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <form>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <TextField
//             size="small"
//             id="firstName"
//             name="firstName"
//             label="First Name"
//             variant="outlined"
//             sx={{ width: "40%" }}
//             margin="normal"
//             value={personalInfo.firstName}
//             onChange={handleChange}
//           />
//           <TextField
//             size="small"
//             id="lastName"
//             name="lastName"
//             label="Last Name"
//             variant="outlined"
//             sx={{ width: "55%" }}
//             margin="normal"
//             value={personalInfo.lastName}
//             onChange={handleChange}
//           />
//         </Box>
//         <TextField
//           size="small"
//           id="email"
//           name="email"
//           label="Email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={personalInfo.email}
//           onChange={handleChange}
//         />
//         <TextField
//           size="small"
//           id="phone"
//           name="phone"
//           label="Phone"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={personalInfo.phone}
//           onChange={handleChange}
//         />
//         <TextField
//           size="small"
//           id="address"
//           name="address"
//           label="Address"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={personalInfo.address}
//           onChange={handleChange}
//         />
//       </form>
//     </Box>
//   );
// };

// export default PersonalInfoForm;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { RootState } from "../../../src/App/Store";
import { updatePersonalInfo } from "./PersonalInfoSlice";

const PersonalInfoForm: React.FC = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state: RootState) => state.personalInfo);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updatePersonalInfo({ [name]: value }));
    validateInput(name, value);
  };

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "firstName":
      case "lastName":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: value.trim() ? "" : `${name} is required`,
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email address",
        }));
        break;
      case "phone":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: /^[0-9]{10}$/.test(value) ? "" : "Invalid phone number",
        }));
        break;
      case "address":
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: value.trim() ? "" : `${name} is required`,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== "");

    if (!hasErrors) {
      dispatch(updatePersonalInfo(personalInfo));
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
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
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
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
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
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
          error={Boolean(errors.email)}
          helperText={errors.email}
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
          error={Boolean(errors.phone)}
          helperText={errors.phone}
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
          error={Boolean(errors.address)}
          helperText={errors.address}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};

export default PersonalInfoForm;
