// import { Box, Button, Chip, TextField } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../src/App/Store";
// import React, { useState } from "react";
// import { addCertifications, removeCertifications } from "./CertificationSlice";

// interface Entry {
//   certificate: string[];
// }

// const CertificationForm: React.FC = () => {
//   const [newCertificate, setNewCertificate] = useState<string>("");

//   const dispatch = useDispatch();
//   const certification = useSelector((state: RootState) => state.certification);

//   const handleCertificationChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setNewCertificate(e.target.value);
//   };

//   const handleAddCertificate = () => {
//     dispatch(addCertifications({ certificate: [newCertificate] }));
//     setNewCertificate("");
//   };

//   const handleRemoveCertificate = (index: number) => {
//     dispatch(removeCertifications(index));
//   };
//   return (
//     <Box sx={{ widtg: "100%" }}>
//       <form>
//         <TextField
//           size="small"
//           id="certification"
//           name="certification"
//           label="Certification Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={newCertificate}
//           onChange={handleCertificationChange}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleAddCertificate}
//         >
//           Add
//         </Button>
//         {certification.entries.map((entry: Entry, index: number) => (
//           <Chip
//             key={index}
//             label={entry.certificate.join(",")}
//             onDelete={() => handleRemoveCertificate(index)}
//             sx={{ margin: 0.5 }}
//           />
//         ))}
//       </form>
//     </Box>
//   );
// };

// export default CertificationForm;


import React, { useState } from "react";
import { Box, Button, Chip, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/App/Store";
import { addCertifications, removeCertifications } from "./CertificationSlice";
import { useFormik } from "formik";

interface Entry {
  certificate: string[];
}

const CertificationForm: React.FC = () => {
  const dispatch = useDispatch();
  const certification = useSelector((state: RootState) => state.certification);

  const formik = useFormik({
    initialValues: {
      certification: "",
    },
    validate: (values) => {
      const errors: { certification?: string } = {};
      if (!values.certification.trim()) {
        errors.certification = "Certification Name is required";
      } else if (values.certification.length > 40) {
        errors.certification = "Certification Name must be 40 characters or less";
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(addCertifications({ certificate: [values.certification] }));
      setNewCertificate("");
      formik.resetForm();
    },
  });

  const [newCertificate, setNewCertificate] = useState<string>("");

  const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setNewCertificate(e.target.value);
  };

  // const handleAddCertificate = () => {
  //   formik.handleSubmit();
  // };

  const handleRemoveCertificate = (index: number) => {
    dispatch(removeCertifications(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          id="certification"
          name="certification"
          label="Certification Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values.certification}
          onChange={handleCertificationChange}
          onBlur={formik.handleBlur}
          error={formik.touched.certification && Boolean(formik.errors.certification)}
          helperText={formik.touched.certification && formik.errors.certification}
        />
        <Button type="submit" variant="contained" color="primary" >
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
