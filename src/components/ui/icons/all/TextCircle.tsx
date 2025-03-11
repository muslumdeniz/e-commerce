import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.6 5.9H9.23a.75.75 0 0 1 0-1.5H20.6a.75.75 0 1 1 0 1.5m-4.41 4.25a.76.76 0 0 0-.75-.75H9.23a.75.75 0 1 0 0 1.5h6.21a.76.76 0 0 0 .75-.75m5.16 5a.75.75 0 0 0-.75-.75H9.23a.75.75 0 1 0 0 1.5H20.6a.75.75 0 0 0 .75-.75m-5.16 5a.76.76 0 0 0-.75-.75H9.23a.75.75 0 1 0 0 1.5h6.21a.76.76 0 0 0 .75-.75M4.7 3.85a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6m0 10a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6"
    />
  </svg>
);
export default SvgTextCircle;
