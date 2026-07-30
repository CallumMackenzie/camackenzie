export const AboutRaceLane = () => {
  const lanePath =
    "M-240 176 C -122 56, -42 230, 78 132 S 260 50, 388 110 S 526 226, 664 84";

  return (
    <svg
      className="about-race-lane"
      viewBox="-220 0 860 260"
      aria-hidden="true"
      focusable="false"
    >
      <path className="about-race-lane-road" d={lanePath} />
      <path
        className="about-race-lane-kerb about-race-lane-kerb-red about-race-lane-kerb-top"
        d={lanePath}
      />
      <path
        className="about-race-lane-kerb about-race-lane-kerb-white about-race-lane-kerb-top"
        d={lanePath}
      />
      <path
        className="about-race-lane-kerb about-race-lane-kerb-red about-race-lane-kerb-bottom"
        d={lanePath}
      />
      <path
        className="about-race-lane-kerb about-race-lane-kerb-white about-race-lane-kerb-bottom"
        d={lanePath}
      />
      <path className="about-race-lane-stripe" d={lanePath} />
    </svg>
  );
};
