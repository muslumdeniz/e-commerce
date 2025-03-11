import * as React from "react";
import type { SVGProps } from "react";
const SvgDubleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.57 11.22a1 1 0 0 1 0 1.41l-6 6a1 1 0 0 1-1.41 0l-6-6a1 1 0 1 1 1.42-1.41l5.26 5.26 5.25-5.26a1 1 0 0 1 1.48 0m-1.42-5.37L11.9 11.1 6.64 5.85a1 1 0 1 0-1.42 1.41l6 6a1 1 0 0 0 1.41 0l6-6a1 1 0 0 0 0-1.41 1 1 0 0 0-1.48 0"
    />
  </svg>
);
export default SvgDubleDown;
