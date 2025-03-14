import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackRightLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.92 11.91a.57.57 0 0 1 0 .8l-4 4a.57.57 0 0 1-1-.4v-3.26H3.83a.75.75 0 1 1 0-1.5H12V8.33a.57.57 0 0 1 1-.4zM20 4.82a.74.74 0 0 0-.75.75V18.4a.75.75 0 1 0 1.5 0V5.57a.75.75 0 0 0-.75-.75"
    />
  </svg>
);
export default SvgBlackRightLine;
