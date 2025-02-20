import * as React from "react";
import type { SVGProps } from "react";
const SvgGeolocationHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.863.57a9.546 9.546 0 0 0-8.354 8.223 9.55 9.55 0 0 0 2.303 7.625l5.8 6.492a1.754 1.754 0 0 0 2.625 0l5.895-6.492A9.547 9.547 0 0 0 10.862.57m5.883 11.934a1.193 1.193 0 0 1-1.194 1.193h-2.386v-3.58a1.193 1.193 0 1 0-2.387 0v3.58H8.392A1.194 1.194 0 0 1 7.2 12.504V9.163a2.97 2.97 0 0 1 1.193-2.387l2.84-2.136a1.25 1.25 0 0 1 1.48 0l2.84 2.136a2.97 2.97 0 0 1 1.194 2.387z"
    />
  </svg>
);
export default SvgGeolocationHome;
