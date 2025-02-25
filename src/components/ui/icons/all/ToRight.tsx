import * as React from "react";
import type { SVGProps } from "react";
const SvgToRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.069 15.514 7.274 21.886a3.074 3.074 0 0 1-4.524-2.694V4.825a3.074 3.074 0 0 1 4.524-2.711L19.07 8.4a3.989 3.989 0 0 1 0 7.114"
    />
  </svg>
);
export default SvgToRight;
