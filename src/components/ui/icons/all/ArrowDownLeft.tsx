import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.85 16.2a1 1 0 0 1-1 1h-8.4a1 1 0 0 1 0-2h6l-6.7-6.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l6.69 6.68v-6a1 1 0 0 1 2 0z"
    />
  </svg>
);
export default SvgArrowDownLeft;
