import * as React from "react";
import type { SVGProps } from "react";
const SvgPercentage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.686 7.614a6.43 6.43 0 0 0-6.431-6.334H7.552A6.43 6.43 0 0 0 1.25 7.71v8.66a6.43 6.43 0 0 0 6.43 6.346h8.714a6.43 6.43 0 0 0 6.356-6.431zm-13.934.097a1.072 1.072 0 1 1 0 2.143 1.072 1.072 0 0 1 0-2.143m0 8.306a.76.76 0 0 1-.568-.236.804.804 0 0 1 0-1.136l6.431-6.43a.804.804 0 0 1 1.136 1.136l-6.43 6.43a.8.8 0 0 1-.569.236m6.431.268a1.073 1.073 0 1 1 0-2.145 1.073 1.073 0 0 1 0 2.145"
    />
  </svg>
);
export default SvgPercentage;
