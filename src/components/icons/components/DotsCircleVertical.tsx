import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsCircleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.945 1A11 11 0 1 0 23 11.967 11.055 11.055 0 0 0 11.945 1m.066 17.6a1.37 1.37 0 1 1 0-2.741 1.37 1.37 0 0 1 0 2.741m0-5.14a1.37 1.37 0 1 1 1.37-1.36 1.36 1.36 0 0 1-1.37 1.382zm0-5.13a1.371 1.371 0 1 1 0-2.742 1.371 1.371 0 0 1 0 2.742"
    />
  </svg>
);
export default SvgDotsCircleVertical;
