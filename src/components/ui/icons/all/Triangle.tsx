import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.22 15.9 15.43 4.14a4 4 0 0 0-6.86 0L1.78 15.89a4 4 0 0 0 3.44 5.95h13.56a3.9 3.9 0 0 0 2.91-1.28 4 4 0 0 0 .53-4.66m-8.09-11 6.79 11.76A2.42 2.42 0 0 1 21 19l-8.21-5.79V3.78a2.4 2.4 0 0 1 1.34 1.11zm-11 11.76L9.87 4.89a2.4 2.4 0 0 1 1.38-1.11v9.44L3 19a2.41 2.41 0 0 1 .08-2.35zm2.14 3.69a2.5 2.5 0 0 1-1.13-.27L9 16.66l3-2.13 7.88 5.55a2.44 2.44 0 0 1-1.1.26z"
    />
  </svg>
);
export default SvgTriangle;
