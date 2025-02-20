import * as React from "react";
import type { SVGProps } from "react";
const SvgShip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.074 7.7 4.41 9.968V7.474a3 3 0 0 1 3-2.999h1.838V2.486a1.247 1.247 0 0 1 1.236-1.236h2.902a1.247 1.247 0 0 1 1.236 1.236v1.989h1.839a3 3 0 0 1 2.999 3v2.493L13.794 7.7a4.91 4.91 0 0 0-3.72 0m10.75 4.547L13.3 9.194a3.39 3.39 0 0 0-2.515 0l-7.525 3.053A2.47 2.47 0 0 0 1.7 14.56a8.2 8.2 0 0 0 8.084 8.191h4.3a8.2 8.2 0 0 0 8.202-8.202 2.47 2.47 0 0 0-1.516-2.312z"
    />
  </svg>
);
export default SvgShip;
