import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPieSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.135 7.855V2.97a1.71 1.71 0 0 1 2.045-1.686 9.79 9.79 0 0 1 7.525 7.529 1.71 1.71 0 0 1-1.686 2.1h-4.882a2.99 2.99 0 0 1-3.002-3.058m3.002 4.635a4.63 4.63 0 0 1-4.633-4.635V3.296h-.544a9.72 9.72 0 0 0-8.967 5.998 9.73 9.73 0 0 0 2.085 10.588 9.72 9.72 0 0 0 16.615-6.794v-.543z"
    />
  </svg>
);
export default SvgChartPieSimple;
