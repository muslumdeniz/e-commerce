import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifier = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.46 22.75a2.27 2.27 0 0 1-1.52-.61l-2.88-2.73a9.8 9.8 0 0 1-10.84-.57 9.74 9.74 0 0 1-2-13.66A9.78 9.78 0 0 1 19.3 16.3l2.75 2.57a2.25 2.25 0 0 1 0 3.17 2.18 2.18 0 0 1-1.59.71m-4.23-5.24L20 21a.75.75 0 0 0 .51.21A.72.72 0 0 0 21 21a.75.75 0 0 0 0-1l-3.69-3.46.4-.54A8.292 8.292 0 1 0 3.03 8.99a8.24 8.24 0 0 0 3.08 8.65 8.29 8.29 0 0 0 9.62.2zm-5.23.57a7.148 7.148 0 0 1-6.606-9.886A7.15 7.15 0 1 1 11 18.08m0-12.8a5.65 5.65 0 1 0 0 11.3 5.65 5.65 0 0 0 0-11.3"
    />
  </svg>
);
export default SvgMagnifier;
