import * as React from "react";
import type { SVGProps } from "react";
const SvgFocus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22 11.25h-1.95A8.1 8.1 0 0 0 12.68 4V2a.75.75 0 1 0-1.5 0v2A8.09 8.09 0 0 0 4 11.25H2a.75.75 0 1 0 0 1.5h2A8.09 8.09 0 0 0 11.18 20v2a.75.75 0 1 0 1.5 0v-1.95a8.1 8.1 0 0 0 7.37-7.3H22a.75.75 0 1 0 0-1.5m-10 7.33A6.58 6.58 0 1 1 18.59 12 6.59 6.59 0 0 1 12 18.58m-.08-1.93a4.65 4.65 0 1 1 .01 0zm0-7.8a3.15 3.15 0 1 0 .01 0z"
    />
  </svg>
);
export default SvgFocus;
