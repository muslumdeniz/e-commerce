import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M5.91 20.63a3.86 3.86 0 0 1-3.84-3.42l-.79-6.75A3.87 3.87 0 0 1 2.76 7l6-4.64a3.91 3.91 0 0 1 4.86.1l5.7 4.8c.52.43.914.994 1.14 1.63a.74.74 0 0 1-.44 1 .75.75 0 0 1-1-.44 2.5 2.5 0 0 0-.71-1l-5.65-4.89a2.39 2.39 0 0 0-3-.06l-6 4.63a2.4 2.4 0 0 0-.9 2.16l.8 6.71a2.37 2.37 0 0 0 2.35 2.1h5.47a.75.75 0 1 1 0 1.5H5.91zm14.48.95 1.17-.94a3.17 3.17 0 0 0 1.17-2.41v-3.28a2.32 2.32 0 0 0-1.39-2.15l-2.47-1.09a2.35 2.35 0 0 0-1.91 0l-2.57 1.18A2.36 2.36 0 0 0 13.06 15v3.27a3.08 3.08 0 0 0 1.18 2.5l1 .82a4.14 4.14 0 0 0 2.57.89 4.1 4.1 0 0 0 2.58-.9m-2.1-8.49 2.46 1.08a.82.82 0 0 1 .5.77v3.27a1.64 1.64 0 0 1-.62 1.26l-1.16 1a2.63 2.63 0 0 1-3.27 0l-1-.81a1.65 1.65 0 0 1-.62-1.32v-3.27a.81.81 0 0 1 .48-.74l2.57-1.19a.86.86 0 0 1 .68 0z"
    />
  </svg>
);
export default SvgSafeHome;
