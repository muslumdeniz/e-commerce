import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieToo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.95 20.641a2.157 2.157 0 0 1-2.703 2.038 9.7 9.7 0 0 1-5.053-3.491 9.71 9.71 0 0 1 5.053-15.15 2.152 2.152 0 0 1 2.703 2.038zm2.1-2.717a2.16 2.16 0 0 0 1.739 2.069c.32.063.65.052.964-.031a9.7 9.7 0 0 0 5.053-3.491 9.71 9.71 0 0 0-5.053-15.15 2.152 2.152 0 0 0-2.703 2.07z"
    />
  </svg>
);
export default SvgChartPieToo;
