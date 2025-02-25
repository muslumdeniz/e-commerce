import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M5.026 9.425 3.66 8.039A2.3 2.3 0 0 1 3 6.412V3.8A2.32 2.32 0 0 1 5.32 1.5h4.587a.504.504 0 0 1 .42.777L5.813 9.34a.504.504 0 0 1-.787.084M18.692 1.5h-5.248a1.29 1.29 0 0 0-1.05.598l-5.52 8.607a.504.504 0 0 0 .073.63l.567.577a4.58 4.58 0 0 1 1.312 3.15v5.248a2.1 2.1 0 0 0 3.38 1.753l1.438-1.05a2 2 0 0 0 .85-1.637V15.04a4.05 4.05 0 0 1 1.301-3.043l4.44-3.958a2.29 2.29 0 0 0 .777-1.742V3.799a2.32 2.32 0 0 0-2.32-2.299"
    />
  </svg>
);
export default SvgFilter;
