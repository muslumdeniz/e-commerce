import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.31 1.25H6.69a3.44 3.44 0 0 0-3.44 3.44v14.62a3.44 3.44 0 0 0 3.44 3.44h10.62a3.44 3.44 0 0 0 3.44-3.44V4.69a3.44 3.44 0 0 0-3.44-3.44M4.75 8.75h14.5v3.5H4.75zm14.5 10.56a1.94 1.94 0 0 1-1.94 1.94H6.69a1.94 1.94 0 0 1-1.94-1.94v-5.56h14.5zM4.75 7.25V4.69a1.94 1.94 0 0 1 1.94-1.94h10.62a1.94 1.94 0 0 1 1.94 1.94v2.56zm9.78-1.5H9.66a.75.75 0 0 1 0-1.5h4.87a.75.75 0 1 1 0 1.5M9.25 17.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m8 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
);
export default SvgBus;
