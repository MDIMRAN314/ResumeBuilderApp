import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Chip } from "@mui/material";
import { RootState } from "../../../src/App/Store";
import { SkillsEntry, addSkill, deleteSkill } from "./SkillsSlice";

const SkillsForm: React.FC = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skill);
  const [inputSkill, setInputSkill] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (inputSkill.trim() !== "") {
      dispatch(addSkill({ skill: inputSkill }));
      setInputSkill("");
    }
  };

  const handleDeleteSkill = (index: number) => {
    dispatch(deleteSkill(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form>
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {skills.entries.map((entry: SkillsEntry, index: number) => (
            <Chip
              key={index}
              color="secondary"
              label={entry.skill}
              onDelete={() => handleDeleteSkill(index)}
              sx={{ marginRight: 1, marginBottom: 1 }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            size="small"
            id="skill-input"
            name="skill-input"
            label="Skill"
            variant="outlined"
            fullWidth
            margin="normal"
            value={inputSkill}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddSkill}
            sx={{ marginTop: "7px", marginLeft: "5px" }}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SkillsForm;
