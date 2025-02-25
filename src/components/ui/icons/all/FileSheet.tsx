import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSheet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.15 6.432V1.25l2.86 3.01 5.676 6.03h-5.02a3.646 3.646 0 0 1-3.516-3.858M22.75 12H19v2.881a4.17 4.17 0 0 1-4.171 4.16H9.173a4.17 4.17 0 0 1-4.171-4.16v-5.74A4.17 4.17 0 0 1 9.173 4.97h3.365V1.25H7.27a6.084 6.084 0 0 0-6.02 6.138v9.224a6.085 6.085 0 0 0 6.02 6.138h9.46a6.085 6.085 0 0 0 6.02-6.138z"
    />
  </svg>
);
export default SvgFileSheet;
