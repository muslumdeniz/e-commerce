import * as React from "react";
import type { SVGProps } from "react";
const SvgDubleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 19a1 1 0 0 1-.71-.3l-6-6a1 1 0 0 1 0-1.41l6-6a1.001 1.001 0 0 1 1.41 1.42L7.47 12l5.25 5.26A1 1 0 0 1 12 19m6.08-.3a1 1 0 0 0 0-1.41L12.84 12l5.26-5.21a1.004 1.004 0 1 0-1.42-1.42l-6 6a1 1 0 0 0 0 1.41l6 6a1 1 0 0 0 1.42 0z"
    />
  </svg>
);
export default SvgDubleLeft;
