// import React, { useState } from "react";
// import { Box, TextField, Button, Chip } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../App/Store";
// import {
//   addAwardsAndAchievements,
//   removeAwardsAndAchievements,
// } from "./AwardsAndAchievementSlice";
// import { Form } from "formik";

// interface Entry {
//   awards: string[];
// }

// const AwardsAndAchievementForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const awardsAndAchievement = useSelector(
//     (state: RootState) => state.awardsAndAchievement
//   );

//   const [newAward, setNewAward] = useState<string>("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewAward(e.target.value);
//   };

//   const handleAddAward = () => {
//     dispatch(addAwardsAndAchievements({ awards: [newAward] }));
//     setNewAward("");
//   };

//   const handleRemoveAward = (index: number) => {
//     dispatch(removeAwardsAndAchievements(index));
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Form>
//         <TextField
//           size="small"
//           id="awards"
//           name="awards"
//           label="Awards and Achievements (Separate with commas)"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={newAward}
//           onChange={handleChange}
//         />
//         <Button variant="contained" color="primary" onClick={handleAddAward} >
//           Add Award
//         </Button>
//         {awardsAndAchievement.entries.map((entry: Entry, index: number) => (
//           <Chip
//             key={index}
//             label={entry.awards.join(", ")}
//             onDelete={() => handleRemoveAward(index)}
//             sx={{ margin: 0.5 }}
//           />
//         ))}
//       </Form>
//     </Box>
//   );
// };

// export default AwardsAndAchievementForm;


import React, { useState } from "react";
import { Box, TextField, Button, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../App/Store";
import {
  addAwardsAndAchievements,
  removeAwardsAndAchievements,
} from "./AwardsAndAchievementSlice";
import { useFormik } from "formik";

interface Entry {
  awards: string[];
}

const AwardsAndAchievementForm: React.FC = () => {
  const dispatch = useDispatch();
  const awardsAndAchievement = useSelector(
    (state: RootState) => state.awardsAndAchievement
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newAward, setNewAward] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      awards: "",
    },
    validate: (values) => {
      const errors: { awards?: string } = {};
      if (!values.awards.trim()) {
        errors.awards = "No content for Awards and Achievements";
      }else if (values.awards.length > 40) {
        errors.awards = "Awards and Achievements must be 40 characters or less";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(addAwardsAndAchievements({ awards: [values.awards] }));
      setNewAward("");
      formik.resetForm();
    },
  });

  const handleRemoveAward = (index: number) => {
    dispatch(removeAwardsAndAchievements(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          id="awards"
          name="awards"
          label="Awards and Achievements"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.awards}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.awards && Boolean(formik.errors.awards)}
          helperText={formik.touched.awards && formik.errors.awards}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Award
        </Button>
        {awardsAndAchievement.entries.map((entry: Entry, index: number) => (
          <Chip
            key={index}
            label={entry.awards.join(", ")}
            onDelete={() => handleRemoveAward(index)}
            sx={{ margin: 0.5 }}
          />
        ))}
      </form>
    </Box>
  );
};

export default AwardsAndAchievementForm;
