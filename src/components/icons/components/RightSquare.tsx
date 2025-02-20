import * as React from "react";
import type { SVGProps } from "react";
const SvgRightSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.192 1.25H7.808A6.57 6.57 0 0 0 1.25 7.808v8.385a6.57 6.57 0 0 0 6.558 6.557h8.385a6.57 6.57 0 0 0 6.557-6.558V7.808a6.57 6.57 0 0 0-6.558-6.558m-1.075 11.363L11.635 16.3a.999.999 0 0 1-1.725-.661 1 1 0 0 1 .274-.715L12.99 12l-2.924-2.849A1 1 0 1 1 11.441 7.7l3.655 3.494a1 1 0 0 1 .032 1.419z"
    />
  </svg>
);
export default SvgRightSquare;
