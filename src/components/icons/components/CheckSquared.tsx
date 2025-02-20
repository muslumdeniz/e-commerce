import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckSquared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.51 22.75H7.48a6.25 6.25 0 0 1-6.23-6.251V7.49a6.24 6.24 0 0 1 6.23-6.24h9.019a6.23 6.23 0 0 1 6.251 6.23v9.008a6.24 6.24 0 0 1-6.24 6.262m-4.824-6.76 6.49-6.488a1.082 1.082 0 1 0-1.536-1.525l-5.722 5.732-3.525-3.547a1.081 1.081 0 1 0-1.536 1.524l4.326 4.326a1.08 1.08 0 0 0 1.525 0z"
    />
  </svg>
);
export default SvgCheckSquared;
