import React from "react";
import { Avatar, Divider, Paper, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { theme } from "./App";
import { EmploymentRole, skillImageSrc, skillInitials } from "./Experience";
import { ResumeCard } from "./ResumeCard";

export const ExperienceCard = (props: {
  experienceCardRef: React.RefObject<HTMLDivElement>;
  employmentRoleRefs: Map<EmploymentRole, React.RefObject<HTMLDivElement>>;
  resumeCardRef: React.RefObject<HTMLDivElement>;
}) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      elevation={4}
      className="container employment-card py-3 px-3 my-5 text-center"
      ref={props.experienceCardRef}
    >
      <Stack spacing={2}>
        <Stack alignItems="center" spacing={1}>
          <h1 className="col">Experience</h1>
          <Divider sx={{ width: "80%" }} />
        </Stack>

        <Stack spacing={2}>
          {EmploymentRole.All.map((job) => (
            <div
              className="employment-entry"
              key={`${job.company}-${job.role}`}
              ref={props.employmentRoleRefs.get(job)}
            >
              <Stack
                direction={smallScreen ? "column" : "row"}
                spacing={2}
                alignItems={smallScreen ? "flex-start" : "center"}
                justifyContent="space-between"
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <span className="employment-logo">
                    <img src={job.logoSrc} alt={`${job.company} logo`} />
                  </span>
                  <Stack textAlign="left" spacing={0.25}>
                    <Typography variant="h5">{job.company}</Typography>
                    <Typography color="text.secondary">{job.role}</Typography>
                  </Stack>
                </Stack>
                <Stack textAlign={smallScreen ? "left" : "right"}>
                  <Typography fontWeight={700}>{job.dates}</Typography>
                  <Typography color="text.primary">{job.location}</Typography>
                </Stack>
              </Stack>

              <ul className="employment-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {job.skills.map((skill) => (
                  <Tooltip key={skill.name} title={skill.name} arrow>
                    <Avatar
                      className="skill-avatar"
                      variant="square"
                      alt={skill.name}
                      src={skillImageSrc(skill)}
                      sx={{ width: 30, height: 30, fontSize: 11 }}
                    >
                      {skillInitials(skill)}
                    </Avatar>
                  </Tooltip>
                ))}
              </Stack>
            </div>
          ))}
        </Stack>
        <ResumeCard resumeCardRef={props.resumeCardRef} />
      </Stack>
    </Paper>
  );
};
