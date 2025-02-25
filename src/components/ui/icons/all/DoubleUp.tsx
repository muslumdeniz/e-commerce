import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.136 19.887a.9.9 0 1 1-1.272-1.273l8.5-8.5a.9.9 0 0 1 1.272 0l8.5 8.5a.9.9 0 1 1-1.272 1.273L12 12.023zm0-6a.9.9 0 1 1-1.272-1.273l8.5-8.5a.9.9 0 0 1 1.272 0l8.5 8.5a.9.9 0 1 1-1.272 1.272L12 6.023z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoubleUp;
