import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitorMobbile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.37 9.11V5.83a4.56 4.56 0 0 0-4.52-4.58H5.78a4.56 4.56 0 0 0-4.53 4.58v7a4.56 4.56 0 0 0 4.53 4.58h5.6v1.91h-4.1a.75.75 0 1 0 0 1.5h4.07a.5.5 0 0 0 .13 0 2.7 2.7 0 0 0 2.59 2h6A2.7 2.7 0 0 0 22.75 20v-8.53a2.71 2.71 0 0 0-1.38-2.36m-10 2.36v4.42H5.78a3.06 3.06 0 0 1-3-3.08v-7a3.06 3.06 0 0 1 3-3.08h11.07a3 3 0 0 1 3 3.08v2.94h-5.8a2.71 2.71 0 0 0-2.67 2.72zM21.25 20a1.2 1.2 0 0 1-1.18 1.21h-6A1.2 1.2 0 0 1 12.88 20v-8.53a1.21 1.21 0 0 1 1.19-1.22h6a1.2 1.2 0 0 1 1.18 1.22z"
    />
    <path
      fill={props.color}
      d="M17.21 20.39a.93.93 0 1 0 0-1.86.93.93 0 0 0 0 1.86"
    />
  </svg>
);
export default SvgMonitorMobbile;
