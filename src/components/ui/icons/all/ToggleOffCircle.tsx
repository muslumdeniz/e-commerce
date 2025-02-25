import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOffCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.991 2.99h-3.982a9.009 9.009 0 1 0 0 18.018h3.982a9.01 9.01 0 0 0 0-18.018M9.954 16.806a4.862 4.862 0 1 1 .001-9.725 4.862 4.862 0 0 1-.001 9.725"
    />
  </svg>
);
export default SvgToggleOffCircle;
