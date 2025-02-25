import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.106 5.668h-3.225a2.81 2.81 0 0 1-2.612-1.752l-.312-.914A2.8 2.8 0 0 0 8.334 1.25h-2.15A4.923 4.923 0 0 0 1.25 6.184v10.922a5.687 5.687 0 0 0 5.644 5.644h10.212a5.687 5.687 0 0 0 5.644-5.644v-5.762a5.687 5.687 0 0 0-5.644-5.676m-2.655 8.665-4.902-.065a.764.764 0 0 1-.774-.763.817.817 0 0 1 .774-.774l4.902.065a.763.763 0 0 1 .752.763.774.774 0 0 1-.752.774"
    />
  </svg>
);
export default SvgMinusFolder;
