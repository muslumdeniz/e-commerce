import * as React from "react";
import type { SVGProps } from "react";
const SvgFileAdded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.72 9.78h-4.68a3.37 3.37 0 0 1-3.26-3.46.6.6 0 0 1 0-.14V1.39zm0 1.52h-4.68a4.88 4.88 0 0 1-4.71-5.06V1.37h-4.9a5.63 5.63 0 0 0-5.57 5.7v6.52A5.2 5.2 0 0 1 5.3 13a5.52 5.52 0 0 1 5.45 5.58 5.6 5.6 0 0 1-.71 2.74h7.14a5.62 5.62 0 0 0 5.57-5.68zM5.3 14.51a4.06 4.06 0 1 1 0 8.12 4.06 4.06 0 0 1 0-8.12m-2 4 1.22 1.6a.63.63 0 0 0 .59.29.73.73 0 0 0 .58-.29l1.7-2.22a.77.77 0 0 0-.13-1.06.72.72 0 0 0-1 .14l-1.22 1.47-.63-.83a.74.74 0 0 0-1-.13.78.78 0 0 0-.16 1.07z"
    />
  </svg>
);
export default SvgFileAdded;
