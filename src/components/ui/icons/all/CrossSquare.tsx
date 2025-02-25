import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.504 22.75H7.485a6.257 6.257 0 0 1-6.235-6.246V7.496A6.256 6.256 0 0 1 7.485 1.25h9.009a6.246 6.246 0 0 1 6.256 6.235v9.009a6.245 6.245 0 0 1-6.246 6.256M13.516 12l3.042-3.042a1.083 1.083 0 0 0-1.548-1.516L12 10.484 8.958 7.442a1.075 1.075 0 0 0-1.753 1.236q.116.164.28.28l3 3.042-3 3.042a1.075 1.075 0 0 0 1.516 1.516L12 13.516l2.967 3.042a1.08 1.08 0 0 0 1.577.06 1.075 1.075 0 0 0-.061-1.576z"
    />
  </svg>
);
export default SvgCrossSquare;
