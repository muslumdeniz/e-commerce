import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.67 8.67a4.08 4.08 0 0 0-2.34-7.42H8.67a4.08 4.08 0 0 0-2.34 7.42 4.07 4.07 0 0 0 0 6.67 4.08 4.08 0 1 0 6.42 3.33v-3.54a4 4 0 0 0 2.58.95 4.07 4.07 0 0 0 2.34-7.41m.24-3.34a2.59 2.59 0 0 1-2.58 2.58h-2.58V2.75h2.58a2.59 2.59 0 0 1 2.58 2.58M8.67 2.75h2.58v5.16H8.67a2.58 2.58 0 1 1 0-5.16m0 6.67h2.58v5.16H8.67a2.58 2.58 0 1 1 0-5.16m0 11.83a2.58 2.58 0 1 1 0-5.16h2.58v2.59a2.59 2.59 0 0 1-2.58 2.57m6.66-6.67A2.58 2.58 0 1 1 17.91 12a2.59 2.59 0 0 1-2.58 2.58"
    />
  </svg>
);
export default SvgFigma;
