import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.208 8.242V2.93a1.572 1.572 0 0 1 1.875-1.552 9.7 9.7 0 0 1 7.638 7.628 1.585 1.585 0 0 1-1.551 1.885h-5.312a2.65 2.65 0 0 1-2.65-2.65m0 7.455v5.31a1.572 1.572 0 0 0 1.875 1.552 9.7 9.7 0 0 0 7.638-7.627 1.585 1.585 0 0 0-1.551-1.886h-5.312a2.65 2.65 0 0 0-2.65 2.65m-1.26-12.53a1.703 1.703 0 0 0-2.069-1.659 10.773 10.773 0 0 0 0 21.116 1.702 1.702 0 0 0 2.026-1.66z"
    />
  </svg>
);
export default SvgChartPie3;
