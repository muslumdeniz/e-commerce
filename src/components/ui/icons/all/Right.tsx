import * as React from "react";
import type { SVGProps } from "react";
const SvgRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.27 19a1 1 0 0 1-.71-.3 1 1 0 0 1 0-1.41L14.78 12 9.56 6.83A1.011 1.011 0 0 1 11 5.41l5.92 5.93a1 1 0 0 1 0 1.41L11 18.67a1 1 0 0 1-.73.33"
    />
  </svg>
);
export default SvgRight;
