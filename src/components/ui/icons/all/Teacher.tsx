import * as React from "react";
import type { SVGProps } from "react";
const SvgTeacher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.16 8.89a3.93 3.93 0 0 0-1.84-3.28L14 1.58a4 4 0 0 0-4.35.07L3.58 5.77a3.92 3.92 0 0 0-1.74 3.29 4 4 0 0 0 1.77 3.29l1.23.82v4.49a4.14 4.14 0 0 0 2.65 3.88l3.1 1.21a4.17 4.17 0 0 0 3.08 0l2.87-1.16a4.15 4.15 0 0 0 2.61-3.87V13.1l.67-.46v2.23a.75.75 0 1 0 1.5 0v-3.49a4 4 0 0 0 .84-2.49m-4.51 8.82A2.65 2.65 0 0 1 16 20.19l-2.87 1.16a2.73 2.73 0 0 1-2 0L8 20.14a2.63 2.63 0 0 1-1.7-2.48v-3.5l3.48 2.32a3.92 3.92 0 0 0 4.43 0l3.41-2.33zm-4.25-2.5a2.44 2.44 0 0 1-2.75 0L4.44 11.1A2.46 2.46 0 0 1 4.42 7l6.06-4.12a2.45 2.45 0 0 1 2.71 0l6.33 4a2.42 2.42 0 0 1 1.14 2A2.46 2.46 0 0 1 19.59 11z"
    />
  </svg>
);
export default SvgTeacher;
