import * as React from "react";
import type { SVGProps } from "react";
const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.89 17.24a1 1 0 0 1-.71-.29l-6-6a1 1 0 1 1 1.41-1.42l5.3 5.3 5.29-5.3a1 1 0 1 1 1.41 1.42l-6 6a1 1 0 0 1-.7.29"
    />
  </svg>
);
export default SvgDown;
