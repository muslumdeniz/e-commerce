import * as React from "react";
import type { SVGProps } from "react";
const SvgDubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.6 18.85a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41L16 12l-5.1-5.1a1 1 0 1 1 1.42-1.41l5.8 5.81a1 1 0 0 1 0 1.41l-5.8 5.81a1 1 0 0 1-.72.33m-4.53-.29 5.81-5.81a1 1 0 0 0 0-1.41L7.07 5.53a1 1 0 0 0-1.41 1.41l5.1 5.1-5.1 5.11a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0"
    />
  </svg>
);
export default SvgDubleRight;
