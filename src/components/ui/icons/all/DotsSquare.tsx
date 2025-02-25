import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.248 1.25H7.752A6.5 6.5 0 0 0 1.25 7.752v8.496a6.5 6.5 0 0 0 6.502 6.502h8.496a6.5 6.5 0 0 0 6.502-6.502V7.741a6.5 6.5 0 0 0-6.502-6.491M7.362 13.17a1.344 1.344 0 1 1 1.387-1.257 1.333 1.333 0 0 1-1.387 1.29zm5.006 0a1.344 1.344 0 1 1 1.333-1.257 1.344 1.344 0 0 1-1.333 1.29zm5.007 0a1.345 1.345 0 1 1 1.333-1.257 1.344 1.344 0 0 1-1.29 1.29z"
    />
  </svg>
);
export default SvgDotsSquare;
