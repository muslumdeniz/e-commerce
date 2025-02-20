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
      d="M21.74 12a.79.79 0 0 1-.782.781h-9.542v3.386a.594.594 0 0 1-1.041.427l-5.209-4.167a.594.594 0 0 1 0-.833l5.209-4.167a.593.593 0 0 1 1.041.406v3.365h9.542a.79.79 0 0 1 .781.802M3.04 3.5a.78.78 0 0 0-.781.781V19.72a.781.781 0 1 0 1.563 0V4.28a.77.77 0 0 0-.782-.78"
    />
  </svg>
);
export default SvgBlackLeftLine;
