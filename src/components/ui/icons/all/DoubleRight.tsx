import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.114 4.136a.9.9 0 1 1 1.272-1.272l8.5 8.5a.9.9 0 0 1 0 1.272l-8.5 8.5a.9.9 0 1 1-1.272-1.272L11.977 12z"
    />
    <path
      fill={props.color}
      d="M10.114 4.136a.9.9 0 0 1 1.272-1.272l8.5 8.5a.9.9 0 0 1 0 1.272l-8.5 8.5a.9.9 0 1 1-1.272-1.272L17.977 12z"
    />
  </svg>
);
export default SvgDoubleRight;
