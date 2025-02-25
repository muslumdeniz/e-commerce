import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M22.358 12c0 .615-.499 1.113-1.114 1.113H5.445l5.974 5.974a1.114 1.114 0 0 1-1.575 1.575l-7.875-7.875a1.114 1.114 0 0 1 0-1.575l7.875-7.874a1.114 1.114 0 1 1 1.575 1.575l-5.974 5.973h15.8c.614 0 1.113.499 1.113 1.114"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowLeft;
