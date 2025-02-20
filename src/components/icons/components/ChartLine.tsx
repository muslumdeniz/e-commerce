import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.364 1.3H7.53A6.42 6.42 0 0 0 1.25 7.718v8.557a6.42 6.42 0 0 0 6.332 6.418h8.836a6.42 6.42 0 0 0 6.332-6.418V7.718A6.42 6.42 0 0 0 16.364 1.3m.93 8.964-2.823 3.07a1.7 1.7 0 0 1-2.332.181l-1.669-1.347a.12.12 0 0 0-.15 0l-2.577 2.674a.79.79 0 0 1-1.134 0 .823.823 0 0 1-.01-1.134l2.577-2.674a1.69 1.69 0 0 1 2.31-.107l1.659 1.348a.13.13 0 0 0 .16 0l2.813-3.124a.81.81 0 0 1 1.177-.042.835.835 0 0 1 0 1.155"
    />
  </svg>
);
export default SvgChartLine;
