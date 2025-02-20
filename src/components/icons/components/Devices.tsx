import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.181 1.59H5.82A4.57 4.57 0 0 0 1.25 6.159v11.675a4.57 4.57 0 0 0 4.569 4.569H18.18a4.57 4.57 0 0 0 4.569-4.57V6.16a4.57 4.57 0 0 0-4.569-4.569m-8.17 7.181a1.075 1.075 0 1 1 0 2.15 1.075 1.075 0 0 1 0-2.15M5.808 9.846a1.075 1.075 0 1 1 2.15 0 1.075 1.075 0 0 1-2.15 0m11.417 6.719H6.86a.806.806 0 1 1 0-1.613h10.364c.213 0 .418.085.57.237.15.15.236 1.356.236 1.57s-.085-.581-.236-.43a.8.8 0 0 1-.57.236m0-5.913h-3.527a.806.806 0 1 1 0-1.612h3.526a.806.806 0 0 1 0 1.613"
    />
  </svg>
);
export default SvgDevices;
