import * as React from "react";
import type { SVGProps } from "react";
const SvgToLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m4.934 8.486 11.794-6.372a3.074 3.074 0 0 1 4.525 2.694v14.367a3.074 3.074 0 0 1-4.525 2.711L4.934 15.601a3.99 3.99 0 0 1 0-7.115"
    />
  </svg>
);
export default SvgToLeft;
