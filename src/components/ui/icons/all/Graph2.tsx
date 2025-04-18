import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.84 2.67a5.56 5.56 0 0 1 5.51 5.61v7.44a5.56 5.56 0 0 1-5.51 5.61H8.16a5.56 5.56 0 0 1-5.51-5.61V8.28a5.56 5.56 0 0 1 5.51-5.61zM15 16.6a.7.7 0 0 0 .69-.71V7.55a.7.7 0 1 0-1.39 0v8.34a.7.7 0 0 0 .7.71m-5.25 0a.7.7 0 0 0 .7-.71V12.5a.7.7 0 1 0-1.4 0v3.39a.71.71 0 0 0 .7.71m6.09-15.35H8.16a7 7 0 0 0-6.91 7v7.44a7 7 0 0 0 6.91 7h7.68a7 7 0 0 0 6.91-7V8.28a7 7 0 0 0-6.91-7z"
    />
  </svg>
);
export default SvgGraph2;
