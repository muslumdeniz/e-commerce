import * as React from "react";
import type { SVGProps } from "react";
const SvgXaomi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75m4.47 12.85a.76.76 0 0 1-.75-.75v-5.7a.75.75 0 1 1 1.5 0v5.7a.75.75 0 0 1-.75.75m-2.11-.75v-3A3.41 3.41 0 0 0 11 8.4H7.53a.75.75 0 0 0-.75.75v5.7a.75.75 0 1 0 1.5 0V9.9H11a1.92 1.92 0 0 1 1.91 1.91v3a.75.75 0 1 0 1.5 0zm-.75 0H7.53h3.79V12a.75.75 0 1 0-1.5 0v2.85a.75.75 0 1 0 1.5 0z"
    />
  </svg>
);
export default SvgXaomi;
