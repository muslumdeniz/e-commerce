import * as React from "react";
import type { SVGProps } from "react";
const SvgExitDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.11 16.65a.77.77 0 0 1-.77-.76.78.78 0 0 1 .77-.77 3.28 3.28 0 0 0 3.12-3.42V7.26a3.29 3.29 0 0 0-3.12-3.42H5.89a3.29 3.29 0 0 0-3.12 3.42v4.44a3.28 3.28 0 0 0 3.12 3.42.78.78 0 0 1 .77.77.77.77 0 0 1-.77.76 4.81 4.81 0 0 1-4.64-4.95V7.26a4.8 4.8 0 0 1 4.64-4.94h12.22a4.8 4.8 0 0 1 4.64 4.94v4.44a4.81 4.81 0 0 1-4.64 4.95M11.24 9v10.08l-1.67-1.67a.764.764 0 1 0-1.08 1.08l3 3a.76.76 0 0 0 1.08 0l3-3a.75.75 0 0 0 .22-.54.76.76 0 0 0-1.3-.54l-1.67 1.67V9a.76.76 0 0 0-1.52 0z"
    />
  </svg>
);
export default SvgExitDown;
