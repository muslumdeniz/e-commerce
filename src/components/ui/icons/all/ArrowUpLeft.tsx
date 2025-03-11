import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.13 7.8a1 1 0 0 0-1-1H7.74a1 1 0 0 0-.39.08 1 1 0 0 0-.54.54 1 1 0 0 0-.07.38v8.4a1 1 0 1 0 2 0v-6l6.68 6.68a1 1 0 0 0 1.42-1.41L10.15 8.8h6a1 1 0 0 0 .98-1"
    />
  </svg>
);
export default SvgArrowUpLeft;
