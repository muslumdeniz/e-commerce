import * as React from "react";
import type { SVGProps } from "react";
const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.85 14.47a1 1 0 0 1-.71-.29l-5.25-5.26-5.26 5.26a1 1 0 1 1-1.41-1.42l6-6a1 1 0 0 1 1.41 0l6 6a1.002 1.002 0 0 1-.78 1.71"
    />
  </svg>
);
export default SvgUp;
