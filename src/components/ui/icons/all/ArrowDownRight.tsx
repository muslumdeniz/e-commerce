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
      d="M17.35 16.51a1 1 0 0 1-1 1H8a1 1 0 0 1-.38-.08 1 1 0 0 1-.62-.54 1 1 0 0 1 0-.38v-8.4a1 1 0 0 1 2 0v6l6.64-6.71a1.004 1.004 0 1 1 1.42 1.42l-6.69 6.69h6a1 1 0 0 1 .98 1"
    />
  </svg>
);
export default SvgArrowDownRight;
