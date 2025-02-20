import * as React from "react";
import type { SVGProps } from "react";
const SvgUpDiagonal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M3.87 14.384a.8.8 0 0 1 .8.8v3.018L18.202 4.67h-3.018a.8.8 0 0 1 0-1.6h4.95a.8.8 0 0 1 .8.8v4.95a.8.8 0 0 1-1.6 0V5.8L5.8 19.334H8.82a.8.8 0 1 1 0 1.6H3.87a.8.8 0 0 1-.8-.8v-4.95a.8.8 0 0 1 .8-.8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpDiagonal;
