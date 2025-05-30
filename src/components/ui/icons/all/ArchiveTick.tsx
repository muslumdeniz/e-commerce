import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.89 22.92a2.53 2.53 0 0 1-1.27-.35l-5.1-2.93a1 1 0 0 0-1 0l-5.1 2.93a2.54 2.54 0 0 1-3.81-2.2V6.28a5.21 5.21 0 0 1 5.2-5.2h8.46a5.22 5.22 0 0 1 5.21 5.2v14.09a2.58 2.58 0 0 1-2.55 2.55zM12 18a2.5 2.5 0 0 1 1.27.34l5.1 2.93a1.05 1.05 0 0 0 1.57-.9V6.28a3.71 3.71 0 0 0-3.71-3.7H7.77a3.7 3.7 0 0 0-3.7 3.7v14.09a1 1 0 0 0 1.56.9l5.1-2.93A2.5 2.5 0 0 1 12 18m-.39-4.72 4-4a.75.75 0 1 0-1-1.07l-3.5 3.47-1.05-1a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.12l1.58 1.49a.73.73 0 0 0 .51.21.74.74 0 0 0 .52-.22"
    />
  </svg>
);
export default SvgArchiveTick;
