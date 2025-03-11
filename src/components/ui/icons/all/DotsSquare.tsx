import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.25 22.75h-8.5a6.51 6.51 0 0 1-6.5-6.5v-8.5a6.51 6.51 0 0 1 6.5-6.5h8.5a6.51 6.51 0 0 1 6.5 6.5v8.5a6.51 6.51 0 0 1-6.5 6.5m-8.5-20a5 5 0 0 0-5 5v8.5a5 5 0 0 0 5 5h8.5a5 5 0 0 0 5-5v-8.5a5 5 0 0 0-5-5zM11 11.88a1.34 1.34 0 1 0 2.681 0 1.34 1.34 0 0 0-2.681 0m-5 0a1.34 1.34 0 1 0 2.68 0 1.34 1.34 0 0 0-2.68 0m10 0a1.34 1.34 0 1 0 2.681 0 1.34 1.34 0 0 0-2.681 0"
    />
  </svg>
);
export default SvgDotsSquare;
