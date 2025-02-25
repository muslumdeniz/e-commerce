import * as React from "react";
import type { SVGProps } from "react";
const SvgDownSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M1.25 7.808v8.385a6.57 6.57 0 0 0 6.558 6.557h8.385a6.57 6.57 0 0 0 6.557-6.558V7.808a6.57 6.57 0 0 0-6.558-6.558H7.808A6.57 6.57 0 0 0 1.25 7.808m13.631 2.45a1 1 0 0 1 1.408 0c.18.189.28.439.28.7-.01.27-.121.527-.312.72l-3.644 3.547a.98.98 0 0 1-.71.269.95.95 0 0 1-.699-.301L7.7 11.516a1 1 0 0 1 1.44-1.376L12 13.075z"
    />
  </svg>
);
export default SvgDownSquare;
