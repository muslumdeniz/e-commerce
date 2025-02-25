import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M17.101 1.899a.85.85 0 1 0-1.202 1.202l3.049 3.049H3a.85.85 0 0 0 0 1.7h15.948l-3.049 3.049a.85.85 0 1 0 1.202 1.202l4.5-4.5a.85.85 0 0 0 0-1.202zm-10.202 10A.85.85 0 1 1 8.1 13.101L5.052 16.15H21a.85.85 0 0 1 0 1.7H5.052l3.049 3.049a.85.85 0 0 1-1.202 1.202l-4.5-4.5a.85.85 0 0 1 0-1.202z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRightLeft;
