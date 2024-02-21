import React, { useState } from "react";
import { Box, TextField, Button, Chip } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../App/Store';
import {
  addAwardsAndAchievements,
  removeAwardsAndAchievements,
} from "./AwardsAndAchievementSlice";

interface Entry {
  awards: string[];
}

const AwardsAndAchievementForm: React.FC = () => {
  const dispatch = useDispatch();
  const awardsAndAchievement = useSelector(
    (state: RootState) => state.awardsAndAchievement
  );

  const [newAward, setNewAward] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAward(e.target.value);
  };

  const handleAddAward = () => {
    dispatch(addAwardsAndAchievements({ awards: [newAward] }));
    setNewAward("");
  };

  const handleRemoveAward = (index: number) => {
    dispatch(removeAwardsAndAchievements(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form>
        <TextField
          id="awards"
          name="awards"
          label="Awards and Achievements (Separate with commas)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newAward}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddAward}>
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
