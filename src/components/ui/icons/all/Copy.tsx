import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.341 23H5.048A4.05 4.05 0 0 1 1 18.952v-7.293A4.06 4.06 0 0 1 5.048 7.6h7.293a4.06 4.06 0 0 1 4.059 4.059v7.293A4.06 4.06 0 0 1 12.341 23m6.6-22h-7.282A4.06 4.06 0 0 0 7.6 5.048v.902h4.741a5.72 5.72 0 0 1 5.709 5.709V16.4h.902A4.06 4.06 0 0 0 23 12.341V5.048A4.05 4.05 0 0 0 18.952 1z"
    />
  </svg>
);
export default SvgCopy;
