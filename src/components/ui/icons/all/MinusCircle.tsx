import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0m-4.4 0a1.1 1.1 0 0 0-1.1-1.1h-11a1.1 1.1 0 0 0 0 2.2h11a1.1 1.1 0 0 0 1.1-1.1"
    />
  </svg>
);
export default SvgMinusCircle;
