import * as React from "react";
import type { SVGProps } from "react";
const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7.151 3.16a1.18 1.18 0 0 1 1.697 0l8 8.198c.469.48.469 1.259 0 1.74L9.293 20.84a1.18 1.18 0 0 1-1.697 0 1.25 1.25 0 0 1 0-1.74l6.707-6.873L7.15 4.9a1.25 1.25 0 0 1 0-1.739"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRight;
