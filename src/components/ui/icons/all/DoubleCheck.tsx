import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M17.636 7.696a.9.9 0 1 0-1.272-1.272L10 12.787l-2.364-2.363a.9.9 0 1 0-1.272 1.272l2.363 2.364L7.5 15.287l-4.864-4.863a.9.9 0 1 0-1.272 1.272L7.5 17.833l2.5-2.5 2.5 2.5L22.636 7.696a.9.9 0 1 0-1.272-1.272L12.5 15.287l-1.227-1.227z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDoubleCheck;
