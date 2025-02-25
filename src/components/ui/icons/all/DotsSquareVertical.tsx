import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsSquareVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.3 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.6a6.45 6.45 0 0 0 6.45 6.45h8.6a6.45 6.45 0 0 0 6.45-6.45V7.7a6.45 6.45 0 0 0-6.45-6.45m-4.418 16.738a1.344 1.344 0 1 1 0-2.689 1.344 1.344 0 0 1 0 2.689m0-5.02a1.344 1.344 0 1 1 1.344-1.334 1.33 1.33 0 0 1-1.344 1.333m0-5.01a1.344 1.344 0 1 1 0-2.687 1.344 1.344 0 0 1 0 2.687"
    />
  </svg>
);
export default SvgDotsSquareVertical;
