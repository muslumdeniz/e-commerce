import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.988 1.25H7.937A6.676 6.676 0 0 0 1.25 7.969v8.02a6.72 6.72 0 0 0 6.687 6.761h8.051a6.773 6.773 0 0 0 6.762-6.762v-8.02a6.74 6.74 0 0 0-6.762-6.718M15.848 12A3.891 3.891 0 1 1 12 8.109 3.87 3.87 0 0 1 15.85 12m2.44-5.224A1.075 1.075 0 1 1 19.365 5.7a1.075 1.075 0 0 1-1.075 1.053z"
    />
  </svg>
);
export default SvgInstagram;
