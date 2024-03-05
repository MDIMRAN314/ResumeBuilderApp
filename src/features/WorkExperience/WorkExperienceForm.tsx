import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { RootState } from "../../../src/App/Store";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import {
  WorkExperienceEntry,
  addWorkExperience,
  deleteWorkExperience,
  editWorkExperience,
} from "./WorkExperienceSlice";
import { Delete } from "@mui/icons-material";
const WorkExperienceForm: React.FC = () => {
  const dispatch = useDispatch();
  const workExperience = useSelector(
    (state: RootState) => state.workExperience
  );

  const handleDateChange = (date: Dayjs | null, id: string, index: number) => {
    if (date) {
      dispatch(
        editWorkExperience({
          index,
          entry: {
            ...workExperience.entries[index],
            [id]: date.format("MMM/YYYY"),
          },
        })
      );
    } else {
      dispatch(
        editWorkExperience({
          index,
          entry: { ...workExperience.entries[index], [id]: "" },
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
      editWorkExperience({
        index,
        entry: {
          ...workExperience.entries[index],
          [id]: id === "roleDescription" ? value.split("\n") : value,
        },
      })
    );
  };

  const handleAddWorkExperience = () => {
    dispatch(
      addWorkExperience({
        start_date: "",
        end_date: "",
        designation: "",
        company: "",
        location: "",
        roleDescription: [],
      })
    );
  };

  const handleDeleteWorkExperience = (index: number) => {
    dispatch(deleteWorkExperience(index));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <form>
        {workExperience.entries.map(
          (entry: WorkExperienceEntry, index: number) => (
            <div key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={
                      entry.start_date
                        ? dayjs(entry.start_date, "MMM/YYYY")
                        : null
                    }
                    onChange={(date) =>
                      handleDateChange(date, "start_date", index)
                    }
                    slotProps={{
                      textField: {
                        size: "small",
                        id: `startDate-${index}`,
                        name: `startDate-${index}`,
                        label: "Start Date",
                        variant: "outlined",
                        fullWidth: true,
                        margin: "normal",
                      },
                    }}
                  />
                  <DatePicker
                    value={
                      entry.end_date ? dayjs(entry.end_date, "MMM/YYYY") : null
                    }
                    onChange={(date) =>
                      handleDateChange(date, "end_date", index)
                    }
                    slotProps={{
                      textField: {
                        size: "small",
                        id: `endDate-${index}`,
                        name: `endDate-${index}`,
                        label: "End Date",
                        variant: "outlined",
                        fullWidth: true,
                        margin: "normal",
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  size="small"
                  id={`designation-${index}`}
                  name={`designation-${index}`}
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  required
                  value={entry.designation}
                  onChange={(e) => handleChange(e, "designation", index)}
                />
                <TextField
                  size="small"
                  id={`company-${index}`}
                  name={`company-${index}`}
                  label="Company"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  value={entry.company}
                  onChange={(e) => handleChange(e, "company", index)}
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
                  id={`roleDescription-${index}`}
                  name={`descriptions-${index}`}
                  label="Role Descriptions (About your achievements...)"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  value={
                    entry.roleDescription
                      ? entry.roleDescription.join("\n")
                      : ""
                  }
                  onChange={(e) => handleChange(e, "roleDescription", index)}
                />

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteWorkExperience(index)}
                >
                  <Delete />
                </Button>
              </Box>
            </div>
          )
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddWorkExperience}
        >
          Add Work Experience
        </Button>
      </form>
    </Box>
  );
};

export default WorkExperienceForm;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Box, TextField, Button } from "@mui/material";
// import { RootState } from "../../../src/App/Store";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs, { Dayjs } from "dayjs";
// import { Formik, Field, FieldProps, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import {
//   WorkExperienceEntry,
//   addWorkExperience,
//   deleteWorkExperience,
//   editWorkExperience,
// } from "./WorkExperienceSlice";
// import { Delete } from "@mui/icons-material";

// const validationSchema = Yup.object().shape({
//   start_date: Yup.string().required("Start Date is required"),
//   end_date: Yup.string().required("End Date is required"),
//   designation: Yup.string().required("Designation is required"),
//   company: Yup.string().required("Company is required"),
// });

// const WorkExperienceForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const workExperience = useSelector(
//     (state: RootState) => state.workExperience
//   );

//   const [isEditMode, setIsEditMode] = useState<boolean[]>([]);

//   const toggleEditMode = (index: number) => {
//     const newIsEditMode = [...isEditMode];
//     newIsEditMode[index] = !newIsEditMode[index];
//     setIsEditMode(newIsEditMode);
//   };

//   const handleDateChange = (date: Dayjs | null, id: string, index: number) => {
//     if (date) {
//       dispatch(
//         editWorkExperience({
//           index,
//           entry: {
//             ...workExperience.entries[index],
//             [id]: date.format("MMM/YYYY"),
//           },
//         })
//       );
//     } else {
//       dispatch(
//         editWorkExperience({
//           index,
//           entry: { ...workExperience.entries[index], [id]: "" },
//         })
//       );
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     id: string,
//     index: number
//   ) => {
//     const { value } = e.target;
//     dispatch(
//       editWorkExperience({
//         index,
//         entry: {
//           ...workExperience.entries[index],
//           [id]: id === "roleDescription" ? value.split("\n") : value,
//         },
//       })
//     );
//   };

//   const handleAddWorkExperience = () => {
//     dispatch(
//       addWorkExperience({
//         start_date: "",
//         end_date: "",
//         designation: "",
//         company: "",
//         location: "",
//         roleDescription: [],
//       })
//     );
//     setIsEditMode([...isEditMode, true]);
//   };

//   const handleDeleteWorkExperience = (index: number) => {
//     dispatch(deleteWorkExperience(index));
//     const newIsEditMode = [...isEditMode];
//     newIsEditMode.splice(index, 1);
//     setIsEditMode(newIsEditMode);
//   };

//   const handleSave = () => {
//     setIsEditMode(new Array(workExperience.entries.length).fill(false));
//   };

//   const initialValues: WorkExperienceEntry = {
//     start_date: "",
//     end_date: "",
//     designation: "",
//     company: "",
//     location: "",
//     roleDescription: [],
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         dispatch(addWorkExperience(values));
//         setIsEditMode([...isEditMode, true]);
//       }}
//     >
//       <Form>
//         <Box sx={{ width: "100%" }}>
//           {workExperience.entries.map(
//             (entry: WorkExperienceEntry, index: number) => (
//               <div key={index}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     gap: "1rem",
//                   }}
//                 >
//                   <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DatePicker
//                       value={
//                         entry.start_date
//                           ? dayjs(entry.start_date, "MMM/YYYY")
//                           : null
//                       }
//                       onChange={(date) =>
//                         handleDateChange(date, "start_date", index)
//                       }
//                       slotProps={{
//                         textField: {
//                           size: "small",
//                           id: `startDate-${index}`,
//                           name: `startDate-${index}`,
//                           label: "Start Date",
//                           variant: "outlined",
//                           fullWidth: true,
//                           margin: "normal",
//                           disabled: !isEditMode[index],
//                         },
//                       }}
//                     />
//                     <DatePicker
//                       value={
//                         entry.end_date
//                           ? dayjs(entry.end_date, "MMM/YYYY")
//                           : null
//                       }
//                       onChange={(date) =>
//                         handleDateChange(date, "end_date", index)
//                       }
//                       slotProps={{
//                         textField: {
//                           size: "small",
//                           id: `endDate-${index}`,
//                           name: `endDate-${index}`,
//                           label: "End Date",
//                           variant: "outlined",
//                           fullWidth: true,
//                           margin: "normal",
//                           disabled: !isEditMode[index],
//                         },
//                       }}
//                     />
//                   </LocalizationProvider>
//                 </Box>
//                 <Box sx={{ mt: 2 }}>
//                   <Field name={`designation-${index}`}>
//                     {({ field }: FieldProps) => (
//                       <>
//                         <TextField
//                           {...field}
//                           size="small"
//                           label="Designation"
//                           variant="outlined"
//                           fullWidth
//                           disabled={!isEditMode[index]}
//                         />
//                         <ErrorMessage
//                           name={`designation-${index}`}
//                           component="div"
//                           // style={{ color: "red" }}
//                         />
//                       </>
//                     )}
//                   </Field>
//                   <Field name={`company-${index}`}>
//                     {({ field }: FieldProps) => (
//                       <>
//                         <TextField
//                           {...field}
//                           size="small"
//                           label="Company"
//                           variant="outlined"
//                           fullWidth
//                           margin="normal"
//                           disabled={!isEditMode[index]}
//                         />
//                         <ErrorMessage
//                           name={`company-${index}`}
//                           component="div"
//                           style={{ color: "red" }}
//                         />
//                       </>
//                     )}
//                   </Field>
//                   <TextField
//                     size="small"
//                     id={`location-${index}`}
//                     name={`location-${index}`}
//                     label="Location"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     value={entry.location}
//                     onChange={(e) => handleChange(e, "location", index)}
//                     disabled={!isEditMode[index]}
//                   />

//                   <TextField
//                     size="small"
//                     id={`roleDescription-${index}`}
//                     name={`descriptions-${index}`}
//                     label="Role Descriptions (About your achievements...)"
//                     variant="outlined"
//                     fullWidth
//                     margin="normal"
//                     multiline
//                     rows={3}
//                     value={
//                       entry.roleDescription
//                         ? entry.roleDescription.join("\n")
//                         : ""
//                     }
//                     onChange={(e) => handleChange(e, "roleDescription", index)}
//                     disabled={!isEditMode[index]}
//                   />

//                   {isEditMode[index] ? (
//                     <>
//                       <Button
//                         variant="contained"
//                         color="error"
//                         onClick={() => handleDeleteWorkExperience(index)}
//                       >
//                         <Delete />
//                       </Button>
//                     </>
//                   ) : (
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={() => toggleEditMode(index)}
//                     >
//                       Edit
//                     </Button>
//                   )}
//                 </Box>
//               </div>
//             )
//           )}

//           {workExperience.entries.length > 0 && (
//             <Button variant="contained" color="primary" onClick={handleSave}>
//               Save
//             </Button>
//           )}
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleAddWorkExperience}
//           >
//             Add Work Experience
//           </Button>
//         </Box>
//       </Form>
//     </Formik>
//   );
// };

// export default WorkExperienceForm;
