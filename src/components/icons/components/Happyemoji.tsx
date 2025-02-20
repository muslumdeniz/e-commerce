import * as React from "react";
import type { SVGProps } from "react";
const SvgHappyemoji = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m4.818 16.313a8 8 0 0 1-4.631 1.474 9.65 9.65 0 0 1-5.005-1.474.836.836 0 0 1-.209-1.1.814.814 0 0 1 1.1-.198 7.05 7.05 0 0 0 7.766 0 .803.803 0 0 1 1.1.209.814.814 0 0 1-.121 1.089"
    />
  </svg>
);
export default SvgHappyemoji;
