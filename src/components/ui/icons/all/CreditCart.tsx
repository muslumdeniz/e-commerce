import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.73 5H5.27a4 4 0 0 0-4 4v8.26a4 4 0 0 0 4 4h13.46a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4m-16 5.23h18.5v2.17H2.75zm2.54-3.77h13.46a2.52 2.52 0 0 1 2.49 2.23H2.78a2.52 2.52 0 0 1 2.49-2.23m13.46 13.3H5.27a2.52 2.52 0 0 1-2.52-2.52v-3.38h18.5v3.38a2.52 2.52 0 0 1-2.52 2.52m-4.64-2.17a.76.76 0 0 1-.75.75h-1.49a.75.75 0 1 1 0-1.5h1.49a.76.76 0 0 1 .75.75m6 0a.76.76 0 0 1-.75.75H15.8a.75.75 0 1 1 0-1.5h3.55a.76.76 0 0 1 .75.75z"
    />
  </svg>
);
export default SvgCreditCart;
