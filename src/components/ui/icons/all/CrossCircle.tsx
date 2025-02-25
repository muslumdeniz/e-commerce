import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-9.449 0 3.113-3.113a1.1 1.1 0 0 0-1.551-1.562L12 10.449 8.887 7.391a1.1 1.1 0 0 0-1.551 0 1.1 1.1 0 0 0 0 1.551l3.113 3.113-3.124 3.036a1.1 1.1 0 0 0 0 1.551 1.1 1.1 0 0 0 1.551 0L12 13.529l3.102 3.113a1.1 1.1 0 0 0 1.556.006 1.1 1.1 0 0 0 .006-1.557z"
    />
  </svg>
);
export default SvgCrossCircle;
