import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-11.33 4.081 6.6-6.6a1.1 1.1 0 0 0 0-1.551 1.1 1.1 0 0 0-1.551 0L10.9 13.749l-3.63-3.63a1.1 1.1 0 1 0-1.562 1.551l4.4 4.4a1.1 1.1 0 0 0 1.562.011"
    />
  </svg>
);
export default SvgCheckCircle;
