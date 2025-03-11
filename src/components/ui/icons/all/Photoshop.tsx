import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoshop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.76 7.9a6.71 6.71 0 0 0-6.71-6.67H7.91A6.71 6.71 0 0 0 1.2 8v8.08A6.71 6.71 0 0 0 8 22.77h8.14A6.71 6.71 0 0 0 22.8 16zm-3 11.78a5.18 5.18 0 0 1-3.67 1.55L8 21.27a5.21 5.21 0 0 1-5.21-5.18L2.7 8a5.22 5.22 0 0 1 5.18-5.23h8.14a5.07 5.07 0 0 1 3.69 1.5 5.2 5.2 0 0 1 1.55 3.68v8.08a5.16 5.16 0 0 1-1.47 3.65zm-5-7.42a.48.48 0 0 0 .48.49 2 2 0 0 1 0 4h-1.16a.75.75 0 1 1 0-1.5h1.23a.5.5 0 1 0 0-1 2 2 0 1 1 0-4h1.24a.75.75 0 1 1 0 1.5h-1.24a.48.48 0 0 0-.48.51zm-5.37-5h-2a.75.75 0 0 0-.66.74v8a.75.75 0 1 0 1.5 0v-3.29h1.23a2.72 2.72 0 0 0 0-5.44zm0 3.94H8.23V8.77h1.23a1.22 1.22 0 1 1 0 2.44z"
    />
  </svg>
);
export default SvgPhotoshop;
