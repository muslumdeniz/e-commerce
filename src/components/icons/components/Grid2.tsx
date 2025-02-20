import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22 7.19v9.62A5.19 5.19 0 0 1 16.81 22H7.19A5.19 5.19 0 0 1 2 16.81V7.19A5.19 5.19 0 0 1 7.19 2h4.06v20h1.5V2h4.06A5.19 5.19 0 0 1 22 7.19"
    />
  </svg>
);
export default SvgGrid2;
