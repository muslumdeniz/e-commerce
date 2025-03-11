import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.71 3.32H9.08a4.34 4.34 0 0 0-4.27 4.41v5l-1.57-1.62a.75.75 0 0 0-1.06 1.06l2.89 3a.73.73 0 0 0 .54.23.74.74 0 0 0 .54-.23l2.88-3a.76.76 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.71 1.73V7.73a2.87 2.87 0 0 1 2.82-2.91h8.63a2.87 2.87 0 0 1 2.81 2.91v8.91a2.86 2.86 0 0 1-2.81 2.9H9.08a2.81 2.81 0 0 1-2.63-1.84.72.72 0 0 0-1.189-.254.76.76 0 0 0-.161.834 4.25 4.25 0 0 0 4 2.79h8.63A4.34 4.34 0 0 0 22 16.64V7.73a4.35 4.35 0 0 0-4.29-4.41"
    />
  </svg>
);
export default SvgArrowCircleLeft;
