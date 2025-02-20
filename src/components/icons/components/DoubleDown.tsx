import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.136 4.114a.9.9 0 0 0-1.272 1.272l8.5 8.5a.9.9 0 0 0 1.272 0l8.5-8.5a.9.9 0 1 0-1.272-1.272L12 11.977zm0 6a.9.9 0 1 0-1.272 1.272l8.5 8.5a.9.9 0 0 0 1.272 0l8.5-8.5a.9.9 0 1 0-1.272-1.272L12 17.977z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoubleDown;
