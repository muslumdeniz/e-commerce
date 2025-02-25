import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.623 4.418H8.32a.877.877 0 0 1 0-1.755h13.302a.877.877 0 1 1 0 1.755m-5.16 4.972a.89.89 0 0 0-.877-.877H8.32a.877.877 0 1 0 0 1.755h7.265a.89.89 0 0 0 .877-.878m6.037 5.85a.877.877 0 0 0-.877-.877H8.32a.878.878 0 0 0 0 1.755h13.302a.877.877 0 0 0 .877-.878m-6.037 5.85a.89.89 0 0 0-.877-.878H8.32a.878.878 0 0 0 0 1.755h7.265a.89.89 0 0 0 .877-.877M3.021 2.02a1.52 1.52 0 1 0 0 3.042 1.52 1.52 0 0 0 0-3.042m0 11.7a1.521 1.521 0 1 0 0 3.041 1.521 1.521 0 0 0 0-3.042"
    />
  </svg>
);
export default SvgTextCircle;
