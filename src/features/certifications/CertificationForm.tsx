import { Box, Button, Chip, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/App/Store";
import React, { useState } from "react";
import { addCertifications, removeCertifications } from "./CertificationSlice";

interface Entry {
  certificate: string[];
}

const CertificationForm: React.FC = () => {
  const [newCertificate, setNewCertificate] = useState<string>("");

  const dispatch = useDispatch();
  const certification = useSelector((state: RootState) => state.certification);

  const handleCertificationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCertificate(e.target.value);
  };

  const handleAddCertificate = () => {
    dispatch(addCertifications({ certificate: [newCertificate] }));
    setNewCertificate("");
  };

  const handleRemoveCertificate = (index: number) => {
    dispatch(removeCertifications(index));
  };
  return (
    <Box sx={{ widtg: "100%" }}>
      <form>
        <TextField
          size="small"
          id="certification"
          name="certification"
          label="Certificatiion Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newCertificate}
          onChange={handleCertificationChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddCertificate}
        >
          Add
        </Button>
        {certification.entries.map((entry: Entry, index: number) => (
          <Chip
            key={index}
            label={entry.certificate.join(",")}
            onDelete={() => handleRemoveCertificate(index)}
            sx={{ margin: 0.5 }}
          />
        ))}
      </form>
    </Box>
  );
};

export default CertificationForm;
