import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.526 7.697a3.224 3.224 0 1 0 0-6.447 3.224 3.224 0 0 0 0 6.447"
    />
    <path
      fill={props.color}
      d="M19.526 9.31a4.847 4.847 0 0 1-4.835-4.836 4.7 4.7 0 0 1 .795-2.633 10.746 10.746 0 1 0 6.673 6.673 4.7 4.7 0 0 1-2.633.795"
    />
  </svg>
);
export default SvgNotificationCircle;
