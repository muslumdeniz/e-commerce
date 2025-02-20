import * as React from "react";
import type { SVGProps } from "react";
const SvgExitLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.344 5.486v13.137a4.343 4.343 0 0 1-4.44 4.126H13.19a4.343 4.343 0 0 1-4.44-4.18v-5.744h7.296a.825.825 0 1 0 0-1.65H8.75v-5.69a4.343 4.343 0 0 1 4.441-4.234h4.712a4.343 4.343 0 0 1 4.44 4.235M4.363 11.175l1.77-1.792a.836.836 0 0 0 0-1.161.803.803 0 0 0-1.086 0l-3.149 3.257a.814.814 0 0 0 0 1.15l3.149 3.258a.8.8 0 0 0 .883.179.836.836 0 0 0 .257-1.34l-1.824-1.9H8.75v-1.651z"
    />
  </svg>
);
export default SvgExitLeft;
