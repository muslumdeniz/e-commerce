import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m20.72 11.11-1.57 1.64v-5a4.35 4.35 0 0 0-4.27-4.41H6.25A4.34 4.34 0 0 0 2 7.73v8.91A4.34 4.34 0 0 0 6.25 21h8.63a4.25 4.25 0 0 0 4-2.79.76.76 0 0 0-.41-1 .72.72 0 0 0-.94.42 2.81 2.81 0 0 1-2.62 1.84H6.25a2.86 2.86 0 0 1-2.82-2.9V7.73a2.87 2.87 0 0 1 2.82-2.91h8.63a2.87 2.87 0 0 1 2.81 2.91v5.11L16 11.11a.75.75 0 0 0-1.08 1l2.88 3a.73.73 0 0 0 .54.23.74.74 0 0 0 .54-.23l2.88-3a.76.76 0 0 0 0-1.06.75.75 0 0 0-1.04.06"
    />
  </svg>
);
export default SvgArrowCircleRight;
