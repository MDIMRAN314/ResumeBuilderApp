import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { RootState } from "../../../src/App/Store";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import {
  EducationEntry,
  addEducation,
  deleteEducation,
  editEducation,
} from "./EducationSlice";
import { Delete } from "@mui/icons-material";

const EducationForm: React.FC = () => {
  const dispatch = useDispatch();
  const education = useSelector((state: RootState) => state.education);

  const handleDateChange = (date: Dayjs | null, id: string, index: number) => {
    if (date) {
      dispatch(
        editEducation({
          index,
          entry: { ...education.entries[index], [id]: date.format("MMM/YYYY") },
        })
      );
    } else {
      dispatch(
        editEducation({
          index,
          entry: { ...education.entries[index], [id]: "" },
        })
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string,
    index: number
  ) => {
    const { value } = e.target;
    dispatch(
      editEducation({
        index,
        entry: {
          ...education.entries[index],
          [id]: id === "descriptions" ? value.split("\n") : value,
        },
      })
    );
  };

  const handleAddEducation = () => {
    dispatch(
      addEducation({
        from: "",
        to: "",
        institution: "",
        university: "",
        degree: "",
        stream: "",
        location: "",
        cgpa: 0,
        descriptions: [],
      })
    );
  };

  const handleDeleteEducation = (index: number) => {
    dispatch(deleteEducation(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form>
        {education.entries.map((entry: EducationEntry, index: number) => (
          <div key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From"
                  value={entry.from ? dayjs(entry.from, "MMM/YYYY") : null}
                  onChange={(date) => handleDateChange(date, "from", index)}
                  slotProps={{
                    textField: {
                      size: "small",
                      id: `fromYear-${index}`,
                      name: `fromYear-${index}`,
                      label: "From year",
                      variant: "outlined",
                      fullWidth: true,
                    },
                  }}
                />
                <DatePicker
                  label="To"
                  value={entry.to ? dayjs(entry.to, "MMM/YYYY") : null}
                  onChange={(date) => handleDateChange(date, "to", index)}
                  slotProps={{
                    textField: {
                      size: "small",
                      id: `toYear-${index}`,
                      name: `toYear-${index}`,
                      label: "To year",
                      variant: "outlined",
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                size="small"
                id={`degree-${index}`}
                name={`degree-${index}`}
                label="Degree"
                variant="outlined"
                fullWidth
                value={entry.degree}
                onChange={(e) => handleChange(e, "degree", index)}
              />
              <TextField
                size="small"
                id={`stream-${index}`}
                name={`stream-${index}`}
                label="Stream"
                variant="outlined"
                fullWidth
                margin="normal"
                value={entry.stream}
                onChange={(e) => handleChange(e, "stream", index)}
              />
              <TextField
                size="small"
                id={`institution-${index}`}
                name={`institution-${index}`}
                label="Institution"
                variant="outlined"
                fullWidth
                margin="normal"
                value={entry.institution}
                onChange={(e) => handleChange(e, "institution", index)}
              />
              <TextField
                size="small"
                id={`university-${index}`}
                name={`university-${index}`}
                label="University"
                variant="outlined"
                fullWidth
                margin="normal"
                value={entry.university}
                onChange={(e) => handleChange(e, "university", index)}
              />
              <TextField
                size="small"
                id={`location-${index}`}
                name={`location-${index}`}
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
                value={entry.location}
                onChange={(e) => handleChange(e, "location", index)}
              />
              <TextField
                size="small"
                id={`cgpa-${index}`}
                name={`cgpa-${index}`}
                label="CGPA"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                value={entry.cgpa}
                onChange={(e) => handleChange(e, "cgpa", index)}
              />
              <TextField
                size="small"
                id={`descriptions-${index}`}
                name={`descriptions-${index}`}
                label="Descriptions (About your achievements...)"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={3}
                value={entry.descriptions ? entry.descriptions.join("\n") : ""}
                onChange={(e) => handleChange(e, "descriptions", index)}
              />
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeleteEducation(index)}
              >
                <Delete />
              </Button>
            </Box>
          </div>
        ))}

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddEducation}
        >
          Add Education
        </Button>
      </form>
    </Box>
  );
};

export default EducationForm;
