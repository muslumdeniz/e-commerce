import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.83 22.75H8.17a6.29 6.29 0 0 1-6.28-6.28V9.18a6.29 6.29 0 0 1 3.16-5.44.77.77 0 0 1 1.06.26.79.79 0 0 1-.29 1.07 4.74 4.74 0 0 0-2.37 4.11v7.29a4.72 4.72 0 0 0 4.72 4.72h7.66a4.72 4.72 0 0 0 4.72-4.72V9.18a4.73 4.73 0 0 0-2.36-4.09.783.783 0 0 1 .81-1.34 6.31 6.31 0 0 1 3.14 5.43v7.29a6.29 6.29 0 0 1-6.31 6.28M16.81 4V3a1.74 1.74 0 0 0-1.74-1.75H9.4A1.75 1.75 0 0 0 7.65 3v1A1.75 1.75 0 0 0 9.4 5.75h5.67A1.74 1.74 0 0 0 16.81 4m-1.74-1.19a.19.19 0 0 1 .19.19v1a.2.2 0 0 1-.19.2H9.4a.2.2 0 0 1-.2-.2V3a.19.19 0 0 1 .2-.19z"
    />
  </svg>
);
export default SvgTablet;
