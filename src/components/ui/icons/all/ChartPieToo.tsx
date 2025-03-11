import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieToo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.32 2.75a.6.6 0 0 1 .18 0 7.74 7.74 0 0 1 5.82 7.33 7.76 7.76 0 0 1-5.82 7.34h-.18a.57.57 0 0 1-.6-.5V3.25a.57.57 0 0 1 .6-.5M8.69 6.53a.56.56 0 0 1 .59.5v13.72a.6.6 0 0 1-.78.47 7.74 7.74 0 0 1-5.82-7.33A7.76 7.76 0 0 1 8.5 6.55h.19m6.63-5.28a2.06 2.06 0 0 0-2.1 2V17a2.06 2.06 0 0 0 2.1 2 2 2 0 0 0 .58-.08 9.22 9.22 0 0 0 6.92-8.78 9.22 9.22 0 0 0-6.92-8.81 2.4 2.4 0 0 0-.58-.08zM8.68 5a2 2 0 0 0-.58.08 9.22 9.22 0 0 0-6.92 8.78 9.22 9.22 0 0 0 6.92 8.81q.285.075.58.08a2.06 2.06 0 0 0 2.1-2V7a2.06 2.06 0 0 0-2.1-2"
    />
  </svg>
);
export default SvgChartPieToo;
