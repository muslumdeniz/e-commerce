import * as React from "react";
import type { SVGProps } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.354 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.7a6.45 6.45 0 0 0-6.396-6.45m-3.14 16.308h-2.429a.806.806 0 0 1 0-1.613h2.43a.806.806 0 1 1 0 1.613m3-4.569H7.786a.806.806 0 1 1 0-1.613h8.428a.806.806 0 1 1 0 1.613m2.15-4.569H5.636a.806.806 0 1 1 0-1.612h12.728a.806.806 0 0 1 0 1.612"
    />
  </svg>
);
export default SvgSort;
