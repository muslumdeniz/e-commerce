import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.05 11.39a2.93 2.93 0 0 0 .74-2 3 3 0 0 0-3-3H8a.75.75 0 0 0-.75.75v9.64a.75.75 0 0 0 .75.75h5.4a3.3 3.3 0 0 0 1.63-6.18zM8.77 7.93h4a1.51 1.51 0 0 1 0 3h-4zm4.65 8.14H8.77v-3.62h4.65a1.81 1.81 0 0 1 0 3.62m2.63-14.82H8A6.71 6.71 0 0 0 1.25 8v8.1A6.71 6.71 0 0 0 8 22.75h8.1a6.71 6.71 0 0 0 6.7-6.7V8a6.71 6.71 0 0 0-6.75-6.75m5.2 14.8a5.21 5.21 0 0 1-5.2 5.2H8a5.21 5.21 0 0 1-5.2-5.2V8A5.21 5.21 0 0 1 8 2.75h8.1A5.21 5.21 0 0 1 21.25 8z"
    />
  </svg>
);
export default SvgTextBold;
