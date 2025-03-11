import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9 15.75a.71.71 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22M9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 8.77a6.71 6.71 0 0 1-6.76-6.67L1.2 8a6.71 6.71 0 0 1 6.67-6.73h8.14a6.71 6.71 0 0 1 6.75 6.63v8.08a6.72 6.72 0 0 1-6.67 6.75zm8-20.04H7.86A5.22 5.22 0 0 0 2.7 8v8.08A5.22 5.22 0 0 0 8 21.27h8.14A5.22 5.22 0 0 0 21.3 16V7.92a5.16 5.16 0 0 0-1.55-3.67A5.1 5.1 0 0 0 16 2.73"
    />
  </svg>
);
export default SvgPercentage;
