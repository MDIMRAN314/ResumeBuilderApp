import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface AccordionFormProps {
  title: string;
  children: ReactNode;
}

const AccordionForm: React.FC<AccordionFormProps> = ({ title, children }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={"h5"}>{title}</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionForm;
