import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.255 16.63a4.709 4.709 0 1 1-9.418 0 4.709 4.709 0 0 1 9.418 0m-11.056 0a6.348 6.348 0 0 1 10.411-4.904v-4.71a3.73 3.73 0 0 0-2.185-3.386l-5.026-2.294a3.73 3.73 0 0 0-3.091 0L4.315 3.63A3.72 3.72 0 0 0 2.13 7.017v8.03a3.74 3.74 0 0 0 1.333 2.884l5.014 4.097a3.73 3.73 0 0 0 4.272.306A6.37 6.37 0 0 1 9.2 16.63m11.58 4.185a1.092 1.092 0 1 0 0 2.185 1.092 1.092 0 0 0 0-2.185"
    />
  </svg>
);
export default SvgShieldSearch;
