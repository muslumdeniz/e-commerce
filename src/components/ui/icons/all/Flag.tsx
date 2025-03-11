import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m17.47 9 2.4-3a1.7 1.7 0 0 0-1.33-2.76H6v-.48a.75.75 0 0 0-1.5 0v18.48a.75.75 0 1 0 1.5 0v-6.49h12.54A1.69 1.69 0 0 0 19.86 12zm1.25 4.14a.2.2 0 0 1-.18.11H6v-8.5h12.54a.2.2 0 0 1 .18.11.19.19 0 0 1 0 .21L15.55 9l3.14 3.93a.19.19 0 0 1 .03.21"
    />
  </svg>
);
export default SvgFlag;
