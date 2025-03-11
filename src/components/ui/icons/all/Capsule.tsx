import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.82 3.19a6.6 6.6 0 0 0-9.35 0L7.33 7.33l-4.14 4.14a6.6 6.6 0 0 0 0 9.34 6.59 6.59 0 0 0 9.34 0l4.14-4.14 4.15-4.14a6.62 6.62 0 0 0 0-9.34m-9.35 16.56a5.09 5.09 0 0 1-7.22 0 5.09 5.09 0 0 1 0-7.22l3.61-3.61 3.61 3.61 3.61 3.61zm8.28-8.28-3.61 3.61-3.61-3.61-3.61-3.61 3.61-3.61a5.11 5.11 0 0 1 7.22 7.22"
    />
  </svg>
);
export default SvgCapsule;
