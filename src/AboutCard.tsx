import React from "react";

import { Divider, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { theme } from "./App";
import { AboutRaceLane } from "./AboutRaceLane";
import { isPrerendering } from "./prerender";

export const AboutCard = (props: {
  aboutCardRef: React.RefObject<HTMLDivElement>;
}) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Paper
        elevation={4}
        className="about-card container py-2 px-2 my-5 text-center"
        ref={props.aboutCardRef}
      >
        <div className="about-layout row py-2 px-1 justify-content-center align-items-center">
          <div
            className={
              (smallScreen ? "col-11" : "col-6") + " container text-center"
            }
          >
            <h1 className="">About</h1>
            <Divider
              sx={{
                background: "white",
              }}
            />
            <div
              className="text-start py-1"
              style={{
                fontSize: "large",
              }}
            >
              I am joining <b>Tesla AI</b> as an{" "}
              <b>Embedded Software Engineer Intern</b> working on Optimus and
              Autopilot in Palo Alto this January. <br />
              <br /> I am a current undergraduate student at the University of
              British Columbia, and previously worked as an SDE Intern at{" "}
              <b>Amazon</b> and an Embedded SWE Co-op at <b>General Dynamics</b>
              .
              <div className="py-2">
                <Divider
                  sx={{
                    background: "white",
                  }}
                />
              </div>
              My interests and passions include:
            </div>
            <ul
              className="text-start"
              style={{
                fontSize: "large",
              }}
            >
              <li>Embedded Systems</li>
              <li>Machine Learning & Statistics</li>
              <li>Robotics & Biotechnology</li>
              <li>Fitness & Nutrition</li>
              <li>Backpacking & Traveling</li>
              <li>Motorsport</li>
              <li>Guitar</li>
            </ul>
          </div>
          <div
            className={
              (smallScreen ? "col-11" : "col-5") + " about-photo-column"
            }
          >
            <div className="about-photo-stage">
              <AboutRaceLane />
              <img
                className="about-photo img-fluid m-auto"
                alt="Callum Mackenzie"
                src="img/callum-mackenzie-motorbike.webp"
                onLoad={(e) => {
                  if (!isPrerendering()) e.currentTarget.style.animation = "";
                }}
                style={{
                  borderRadius: "50%",
                  animation: "image-preload 5s infinite",
                  overflow: "hidden",
                  minHeight: "100px",
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};
