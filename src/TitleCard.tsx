import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "./App";
import { Avatar } from "@mui/material";
import { Paper, IconButton, Tooltip } from "@mui/material";
import Mail from "@mui/icons-material/Mail";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { EmploymentRole } from "./Experience";

const openGithub = () => {
  window.open("https://github.com/CallumMackenzie");
};
const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/callum-ma/");
};
const openMailTo = () => {
  window.open("mailto:callum@camackenzie.com");
};

export const TitleCard = (props: {
  aboutCardRef: React.RefObject<HTMLDivElement>;
  titleCardRef: React.RefObject<HTMLDivElement>;
}) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div
        className="title d-flex align-items-center justify-content-center"
        ref={props.titleCardRef}
      >
        <div className="container px-2 py-3">
          <div className="title-content row align-items-center justify-content-center px-5 py-5">
            <div
              className={
                (smallScreen ? "col-11" : "col-6") +
                " container text-center mx-auto"
              }
            >
              <div>
                <h1 className="display-1">Callum Mackenzie</h1>
              </div>
              <div>
                <p className="h4">
                  Software Engineer
                  <br />
                  Computer Science and Statistics at UBC
                </p>
              </div>
              <Paper className="row-auto my-4 justify-content-center">
                <Tooltip className="col-auto px-2" title="Github">
                  <IconButton onClick={openGithub}>
                    <Avatar alt="Github" src="/img/github-logo.png" />
                  </IconButton>
                </Tooltip>
                <Tooltip className="col-auto px-2" title="Linkedin">
                  <IconButton onClick={openLinkedin}>
                    <Avatar
                      alt="Linkedin"
                      variant="rounded"
                      src="/img/linkedin-logo.png"
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip className="col-auto px-2" title="Mail">
                  <IconButton onClick={openMailTo}>
                    <Avatar alt="Mail">
                      <Mail />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Paper>
            </div>
            <div
              className={
                (smallScreen ? "col-11 mt-4" : "col-6") + " title-photo-column"
              }
            >
              <img
                className="title-photo img-fluid mx-auto"
                alt="Callum Mackenzie"
                loading="eager"
                src="/img/callum-mackenzie.jpg"
                onLoad={(e) => (e.currentTarget.style.animation = "")}
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  animation: "image-preload 5s infinite",
                  minHeight: "100px",
                }}
              />
              <div
                className="title-company-logos"
                aria-label="Companies I've worked with"
              >
                {EmploymentRole.All.map((job) => (
                  <Tooltip key={job.company} title={job.company} arrow>
                    <span className="title-company-logo">
                      <img src={job.logoSrc} alt={`${job.company} logo`} />
                    </span>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-3">
            <Tooltip className="col-auto" title="About">
              <IconButton
                onClick={() =>
                  props.aboutCardRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
              >
                <Avatar alt="About">
                  <ArrowDropDownIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};
