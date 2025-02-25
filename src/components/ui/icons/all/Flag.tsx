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
      d="M3.877 22.75a.807.807 0 0 1-.807-.807V2.057a.807.807 0 1 1 1.613 0v19.876a.796.796 0 0 1-.806.817M17.783 8.768l2.98-3.721a1.076 1.076 0 0 0-.797-1.657H6.297v10.756h13.67a1.075 1.075 0 0 0 .796-1.657z"
    />
  </svg>
);
export default SvgFlag;
