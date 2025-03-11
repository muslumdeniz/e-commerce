import * as React from "react";
import type { SVGProps } from "react";
const SvgDubleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.57 11.33a1.002 1.002 0 0 1-1.096 1.628 1 1 0 0 1-.324-.218L11.9 7.49l-5.26 5.25a1 1 0 0 1-.71.3 1 1 0 0 1-.71-.3 1 1 0 0 1 0-1.41l6-6a1 1 0 0 1 1.41 0zm-6-.59a1 1 0 0 0-1.41 0l-6 6a1 1 0 0 0 .71 1.71 1 1 0 0 0 .71-.29l5.26-5.26 5.25 5.26a1.004 1.004 0 1 0 1.42-1.42z"
    />
  </svg>
);
export default SvgDubleUp;
