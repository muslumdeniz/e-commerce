import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.21 11.23h-8.15V7.78a.47.47 0 0 0-.8-.34l-4.21 4.21a.47.47 0 0 0 0 .66l4.21 4.21a.47.47 0 0 0 .8-.34v-3.45h8.15a.75.75 0 1 0 0-1.5"
    />
  </svg>
);
export default SvgBlackLeft;
