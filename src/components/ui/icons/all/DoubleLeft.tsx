import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.886 4.136a.9.9 0 1 0-1.272-1.272l-8.5 8.5a.9.9 0 0 0 0 1.272l8.5 8.5a.9.9 0 1 0 1.272-1.272L12.023 12z"
    />
    <path
      fill={props.color}
      d="M13.886 4.136a.9.9 0 1 0-1.272-1.272l-8.5 8.5a.9.9 0 0 0 0 1.272l8.5 8.5a.9.9 0 1 0 1.272-1.272L6.023 12z"
    />
  </svg>
);
export default SvgDoubleLeft;
