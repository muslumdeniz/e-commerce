import * as React from "react";
import type { SVGProps } from "react";
const SvgCategory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.623 10.504H4.651A2.9 2.9 0 0 1 1.75 7.603V4.62a2.9 2.9 0 0 1 2.9-2.87h2.973a2.9 2.9 0 0 1 2.901 2.87v2.983a2.9 2.9 0 0 1-2.9 2.9m14.627-2.87V4.66a2.9 2.9 0 0 0-2.9-2.911h-2.973a2.9 2.9 0 0 0-2.901 2.9v2.973a2.9 2.9 0 0 0 2.9 2.901h2.973a2.9 2.9 0 0 0 2.901-2.89M10.524 19.339v-2.972a2.9 2.9 0 0 0-2.9-2.901H4.65a2.9 2.9 0 0 0-2.901 2.9v2.973a2.9 2.9 0 0 0 2.9 2.911h2.973a2.9 2.9 0 0 0 2.901-2.911m11.726.041v-2.983a2.9 2.9 0 0 0-2.9-2.9h-2.973a2.9 2.9 0 0 0-2.901 2.9v2.983a2.9 2.9 0 0 0 2.9 2.87h2.973a2.9 2.9 0 0 0 2.901-2.87"
    />
  </svg>
);
export default SvgCategory;
