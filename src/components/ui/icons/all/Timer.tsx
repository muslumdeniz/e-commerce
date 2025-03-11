import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.86 22.75A9.16 9.16 0 1 1 21 13.59a9.17 9.17 0 0 1-9.14 9.16m0-16.82a7.66 7.66 0 1 0 7.66 7.66 7.67 7.67 0 0 0-7.66-7.66m.89 6.87V8.53a.75.75 0 1 0-1.5 0v4.27a.75.75 0 1 0 1.5 0m2.41-10a.76.76 0 0 0-.75-.8h-5.1a.75.75 0 0 0 0 1.5h5.1a.75.75 0 0 0 .75-.72z"
    />
  </svg>
);
export default SvgTimer;
