import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.82 11H8.36l4.23-4.23a1 1 0 0 0-1.41-1.37l-5.94 5.94A1 1 0 0 0 5 12a1 1 0 0 0 .08.39 1 1 0 0 0 .21.32l5.94 5.94a1 1 0 0 0 1.41-1.42L8.36 13h9.46a1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgArrowLeft;
