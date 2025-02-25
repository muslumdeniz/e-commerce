import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m22.318 9.42-.77.769a1.07 1.07 0 0 1-1.55 0l-.769-.77-3.377 3.377a6.58 6.58 0 0 1-.48 6.498 1.957 1.957 0 0 1-2.993.299L4.407 11.62a1.955 1.955 0 0 1 .3-2.992 6.58 6.58 0 0 1 6.497-.481L14.58 4.77 13.81 4a1.07 1.07 0 0 1 0-1.549l.77-.77a1.07 1.07 0 0 1 1.55 0l6.186 6.188a1.067 1.067 0 0 1 0 1.55M3.081 17.861a4.9 4.9 0 0 0-1.24 1.955l-.427 1.272a1.175 1.175 0 0 0 1.496 1.496l1.272-.428a4.9 4.9 0 0 0 1.955-1.207l2.65-2.66-3.077-3.079zm6.893-.706-3.12-3.099z"
    />
  </svg>
);
export default SvgPin;
