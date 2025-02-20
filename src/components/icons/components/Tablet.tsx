import * as React from "react";
import type { SVGProps } from "react";
const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.372 4.125H9.15A1.125 1.125 0 0 1 8.026 3V1.875A1.125 1.125 0 0 1 9.15.75h6.22a1.125 1.125 0 0 1 1.126 1.125V3a1.125 1.125 0 0 1-1.125 1.125m2.25-1.305V3a2.25 2.25 0 0 1-2.25 2.25H9.15A2.25 2.25 0 0 1 6.9 3v-.259A6.14 6.14 0 0 0 1.77 8.85v8.201A6.12 6.12 0 0 0 7.8 23.25h8.392a6.12 6.12 0 0 0 6.03-6.21V8.85a6.165 6.165 0 0 0-4.601-6.03"
    />
  </svg>
);
export default SvgTablet;
