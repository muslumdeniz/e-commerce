import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.899 6.899A.85.85 0 0 0 3.101 8.1L6.15 5.052V21a.85.85 0 0 0 1.7 0V5.052l3.049 3.049a.85.85 0 1 0 1.202-1.202l-4.5-4.5a.85.85 0 0 0-1.202 0zm10 10.202a.85.85 0 1 1 1.202-1.202l3.049 3.049V3a.85.85 0 0 1 1.7 0v15.948l3.049-3.05a.85.85 0 0 1 1.202 1.203l-4.5 4.5a.85.85 0 0 1-1.202 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpDown;
