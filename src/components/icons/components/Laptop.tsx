import * as React from "react";
import type { SVGProps } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.8 20.717H3.2a2.2 2.2 0 0 1-2.2-2.2h22a2.2 2.2 0 0 1-2.2 2.2m1.1-3.85V4.534a1.276 1.276 0 0 0-1.265-1.265H3.365A1.276 1.276 0 0 0 2.1 4.535v12.331z"
    />
  </svg>
);
export default SvgLaptop;
