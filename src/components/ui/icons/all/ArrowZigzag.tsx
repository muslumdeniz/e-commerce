import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowZigzag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.38 14.77a.772.772 0 0 0-1.257.84.8.8 0 0 0 .167.25l1.7 1.7H7.28a2.33 2.33 0 1 1 0-4.65h9.6a3.869 3.869 0 0 0 2.625-6.652A3.87 3.87 0 0 0 16.75 5.17H6l1.7-1.7a.774.774 0 0 0-1.09-1.1l-3 3a.8.8 0 0 0-.23.55.83.83 0 0 0 .23.55l3 3a.76.76 0 0 0 1.09 0 .76.76 0 0 0 0-1.09L6 6.7h10.75a2.33 2.33 0 1 1 0 4.66h-9.6a3.87 3.87 0 1 0 .13 7.74H18l-1.7 1.7a.77.77 0 0 0 0 1.09.76.76 0 0 0 1.09 0l3-3a.77.77 0 0 0 0-1.09z"
    />
  </svg>
);
export default SvgArrowZigzag;
