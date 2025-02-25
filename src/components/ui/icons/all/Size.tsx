import * as React from "react";
import type { SVGProps } from "react";
const SvgSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.67 23H6.83A5.83 5.83 0 0 1 1 17.17v-4.84A5.83 5.83 0 0 1 6.83 6.5h4.84a5.83 5.83 0 0 1 5.83 5.83v4.84A5.83 5.83 0 0 1 11.67 23m7.568-22h-4.576A3.76 3.76 0 0 0 10.9 4.762v.088h.77a7.49 7.49 0 0 1 7.48 7.48v.77h.088A3.76 3.76 0 0 0 23 9.338V4.762A3.76 3.76 0 0 0 19.238 1"
    />
  </svg>
);
export default SvgSize;
