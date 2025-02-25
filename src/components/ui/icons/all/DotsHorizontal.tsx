import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7 12a1.7 1.7 0 1 1-3.4 0A1.7 1.7 0 0 1 7 12m6.7 0a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0m5 1.7a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDotsHorizontal;
