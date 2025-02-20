import * as React from "react";
import type { SVGProps } from "react";
const SvgDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 11 11A11.01 11.01 0 0 0 12 1m-6.943 9.688a.755.755 0 0 1-.733.623h-.142a.743.743 0 0 1-.601-.864 8.53 8.53 0 0 1 5.948-6.659.766.766 0 0 1 .46 1.455 7.04 7.04 0 0 0-4.932 5.445M8.337 12A3.641 3.641 0 1 1 12 15.641 3.64 3.64 0 0 1 8.359 12zm6.386 8.124a1 1 0 0 1-.24 0 .755.755 0 0 1-.241-1.476 7.13 7.13 0 0 0 4.592-4.953.755.755 0 0 1 1.454.372 8.57 8.57 0 0 1-5.543 6.057z"
    />
  </svg>
);
export default SvgDisk;
