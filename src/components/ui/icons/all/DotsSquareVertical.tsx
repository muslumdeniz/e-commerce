import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsSquareVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.25 22.75h-8.5a6.51 6.51 0 0 1-6.5-6.5v-8.5a6.51 6.51 0 0 1 6.5-6.5h8.5a6.51 6.51 0 0 1 6.5 6.5v8.5a6.51 6.51 0 0 1-6.5 6.5m-8.5-20a5 5 0 0 0-5 5v8.5a5 5 0 0 0 5 5h8.5a5 5 0 0 0 5-5v-8.5a5 5 0 0 0-5-5zM11.88 13a1.34 1.34 0 1 0 0-2.681 1.34 1.34 0 0 0 0 2.681m0 5a1.34 1.34 0 1 0 0-2.681 1.34 1.34 0 0 0 0 2.681m0-10a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68"
    />
  </svg>
);
export default SvgDotsSquareVertical;
