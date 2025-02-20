import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleRightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.224 14.299-7.35 4.423a1.91 1.91 0 0 1-1.97.005 2 2 0 0 1-.723-.75 2.1 2.1 0 0 1-.264-1.027v-9.9c0-.36.091-.715.264-1.027a2 2 0 0 1 .723-.75 1.91 1.91 0 0 1 1.97.005l7.35 4.423c.387.233.71.568.934.971.224.404.342.862.342 1.328s-.118.924-.342 1.328a2.6 2.6 0 0 1-.934.97M9.249 8.16 4.457 5.278a1.91 1.91 0 0 0-1.97-.005c-.3.18-.55.438-.723.75A2.1 2.1 0 0 0 1.5 7.05v9.9c0 .36.091.715.264 1.027s.423.57.723.75a1.91 1.91 0 0 0 1.97-.005l4.792-2.883z"
    />
  </svg>
);
export default SvgDoubleRightArrow;
