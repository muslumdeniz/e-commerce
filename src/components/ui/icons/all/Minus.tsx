import * as React from "react";
import type { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18 10.94 6 11a1 1 0 0 0 0 2l12-.06a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgMinus;
