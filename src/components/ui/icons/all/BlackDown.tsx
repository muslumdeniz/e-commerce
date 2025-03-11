import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.1 13.83h-3.45V5.68a.75.75 0 1 0-1.5 0v8.15H7.69a.47.47 0 0 0-.33.81l4.2 4.2a.46.46 0 0 0 .67 0l4.2-4.2a.47.47 0 0 0-.33-.81"
    />
  </svg>
);
export default SvgBlackDown;
