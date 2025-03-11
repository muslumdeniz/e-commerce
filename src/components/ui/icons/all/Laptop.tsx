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
      d="M21 17.75H3a.76.76 0 0 1-.75-.75V6.15a1.9 1.9 0 0 1 1.9-1.9h15.7a1.9 1.9 0 0 1 1.9 1.9V17a.76.76 0 0 1-.75.75m-17.25-1.5h16.5V6.15a.4.4 0 0 0-.4-.4H4.15a.4.4 0 0 0-.4.4zm19 3.32a.75.75 0 0 0-.75-.75H2a.75.75 0 1 0 0 1.5h20a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgLaptop;
