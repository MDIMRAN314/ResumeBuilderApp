import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
export const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Divider />
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-left-content">
            <div className="faq-text">
              Frequently Asked Questions About Resume Builder
            </div>
          </div>
          <div className="faq-right-content">
            <div className="accordion-block">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel1")
                }
                elevation={0}
                className={expanded === "panel1" ? "expand1" : "no-expand1"}
              >
                <AccordionSummary
                  id="panel1-header"
                  aria-controls="panel1Content"
                  expandIcon={
                    expanded === "panel1" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel1" ? "expand" : "no-expand"}
                  >
                    What makes Resume Builder the best resume tool?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Using the Resume Builder app, you have a 30% higher chance
                    of getting a job, and our users experience a 42% higher
                    response rate from recruiters. You’ll get expert guidance
                    every step of the way, with more than 30 professional resume
                    templates and AI-enabled suggestions to write a resume that
                    gets results.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel2")
                }
                elevation={0}
                className={expanded === "panel2" ? "expand1" : "no-expand1"}
              >
                <AccordionSummary
                  id="panel2-header"
                  aria-controls="panel2Content"
                  expandIcon={
                    expanded === "panel2" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel2" ? "expand" : "no-expand"}
                  >
                    How do I use the Resume Builder app?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    With Resume Builder, you'll select and customize a template,
                    then create your resume either with step-by-step guidance or
                    by importing your LinkedIn profile. You'll add your
                    experience, education, key skills, and more, aided by expert
                    tips, suggested phrases, and an AI writer tool. Then, save
                    your resume by creating a free account. You can download
                    your TXT resume or upgrade to a paid subscription to
                    download your professionally designed PDF resume.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel3")
                }
                elevation={0}
                className={expanded === "panel3" ? "expand1" : "no-expand1"}
              >
                <AccordionSummary
                  id="panel3-header"
                  aria-controls="panel3Content"
                  expandIcon={
                    expanded === "panel3" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel3" ? "expand" : "no-expand"}
                  >
                    Should I make a different resume for every job application?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes. Tailoring your resume is one of the best ways to get
                    more interviews. Look at the job posting to identify what
                    the employer is seeking. Specifically, find important words
                    or phrases to use in your profile and key skills sections.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel4")
                }
                elevation={0}
                className={expanded === "panel4" ? "expand1" : "no-expand1"}
              >
                <AccordionSummary
                  id="panel4-header"
                  aria-controls="panel4Content"
                  expandIcon={
                    expanded === "panel4" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel4" ? "expand" : "no-expand"}
                  >
                    Does Resume Builder have resume examples that I can look at?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes. Resume Builder has more than 500 free resume examples
                    and templates. Use these examples to get expert advice on
                    what you should — and shouldn't — include in your resume,
                    such as common key skills and action verbs for your desired
                    job.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel5")
                }
                elevation={0}
                className={expanded === "panel5" ? "expand1" : "no-expand1"}
              >
                <AccordionSummary
                  id="panel5-header"
                  aria-controls="panel5Content"
                  expandIcon={
                    expanded === "panel5" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel5" ? "expand" : "no-expand"}
                  >
                    Should I download my new resume as a PDF or text file?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We recommend downloading your resume in both PDF and text
                    format. A professionally designed PDF resume has a visual
                    impact, and its appearance is consistent across computer
                    screens and systems. But you may need a text format resume
                    for some job applications, so it's good to have both
                    available.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, "panel6")
                }
                elevation={0}
                className={expanded === "panel6" ? "expand1" : "no-expand1"}
                sx={{ borderBottom: "1px solid rgb(230, 225, 225)" }}
              >
                <AccordionSummary
                  id="panel6-header"
                  aria-controls="panel6Content"
                  expandIcon={
                    expanded === "panel6" ? (
                      <RemoveSharpIcon
                        sx={{ color: "#EF59A5", fontSize: 35 }}
                      />
                    ) : (
                      <AddSharpIcon sx={{ color: "#FD9D60", fontSize: 35 }} />
                    )
                  }
                >
                  <Typography
                    sx={{ lineHeight: 3, fontSize: 20, fontWeight: 500 }}
                    className={expanded === "panel6" ? "expand" : "no-expand"}
                  >
                    How can I use Resume Builder for free?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    With the Resume Builder app, it’s free to build, save, and
                    download your resume in text format. With a paid
                    subscription, you can download your resume as a PDF. Learn
                    more about how to use Resume Builder for free.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
