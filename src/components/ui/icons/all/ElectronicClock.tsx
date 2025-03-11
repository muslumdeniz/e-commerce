import * as React from "react";
import type { SVGProps } from "react";
const SvgElectronicClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.27 7.55a1.77 1.77 0 0 0-1.35-1.24 2.74 2.74 0 0 0-2-2l-.24-1.43a2 2 0 0 0-2-1.66H8.82a2 2 0 0 0-2 1.66l-.2 1.46A2.74 2.74 0 0 0 4.52 7v10a2.74 2.74 0 0 0 2.1 2.66l.24 1.43a2 2 0 0 0 2 1.66h4.9a2 2 0 0 0 2-1.66l.24-1.43A2.74 2.74 0 0 0 18 17v-5.33a1.77 1.77 0 0 0 1.25-1.22 5.1 5.1 0 0 0 .02-2.9M8.34 3.15a.48.48 0 0 1 .48-.4h4.9a.48.48 0 0 1 .48.41l.18 1.09H8.16zm5.86 17.69a.48.48 0 0 1-.48.41h-4.9a.48.48 0 0 1-.48-.4l-.18-1.1h6.22zM16.52 17a1.25 1.25 0 0 1-1.25 1.25h-8A1.25 1.25 0 0 1 6 17V7a1.25 1.25 0 0 1 1.27-1.25h8A1.25 1.25 0 0 1 16.52 7z"
    />
  </svg>
);
export default SvgElectronicClock;
