import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.55 7.44a.47.47 0 0 0-.8.34v3.45H5.6a.75.75 0 1 0 0 1.5h8.15v3.45a.47.47 0 0 0 .8.34l4.21-4.21a.47.47 0 0 0 0-.66z"
    />
  </svg>
);
export default SvgBlackRight;
