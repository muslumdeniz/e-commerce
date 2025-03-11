import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackLeftLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.78 12a.76.76 0 0 1-.75.75h-8.16V16a.57.57 0 0 1-1 .41l-4-4a.57.57 0 0 1 0-.8l4-4a.57.57 0 0 1 1 .39v3.23H20a.76.76 0 0 1 .78.77m-17-7.16a.75.75 0 0 0-.75.75v12.82a.75.75 0 1 0 1.5 0V5.59a.74.74 0 0 0-.7-.75z"
    />
  </svg>
);
export default SvgBlackLeftLine;
