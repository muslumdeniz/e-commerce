import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.676 4.676a1.114 1.114 0 0 1 1.575 0l11.172 11.172V7.4a1.114 1.114 0 0 1 2.227 0v11.136c0 .615-.498 1.114-1.113 1.114H7.4a1.114 1.114 0 0 1 0-2.227h8.448L4.676 6.25a1.114 1.114 0 0 1 0-1.575"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownRight;
