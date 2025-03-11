import * as React from "react";
import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.43 1.2H4.57a3.32 3.32 0 0 0-3.32 3.32v3a3.33 3.33 0 0 0 2.51 3.22v9.06a3 3 0 0 0 3 3h10.46a3 3 0 0 0 3-3v-9.08a3.33 3.33 0 0 0 2.53-3.22v-3a3.32 3.32 0 0 0-3.32-3.3m-2.21 20.1H6.78a1.52 1.52 0 0 1-1.52-1.52v-9h13.48v9a1.52 1.52 0 0 1-1.52 1.52m4-13.8a1.83 1.83 0 0 1-1.52 1.8H4.27a1.83 1.83 0 0 1-1.52-1.8v-3a1.83 1.83 0 0 1 1.82-1.8h14.86a1.83 1.83 0 0 1 1.82 1.82zm-7 7.33h-3.6a.75.75 0 1 1 0-1.5h3.59a.75.75 0 1 1 0 1.5z"
    />
  </svg>
);
export default SvgArchive;
