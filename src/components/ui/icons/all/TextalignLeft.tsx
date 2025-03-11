import * as React from "react";
import type { SVGProps } from "react";
const SvgTextalignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.75 5.25H3.25a.75.75 0 0 1 0-1.5h17.5a.75.75 0 1 1 0 1.5m-7.2 4.25a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0 0 1.5h9.55a.75.75 0 0 0 .75-.75m8 5a.75.75 0 0 0-.75-.75H3.25a.75.75 0 1 0 0 1.5h17.5a.75.75 0 0 0 .75-.75zm-7.95 5a.75.75 0 0 0-.75-.75h-9.6a.75.75 0 1 0 0 1.5h9.55a.75.75 0 0 0 .75-.75z"
    />
  </svg>
);
export default SvgTextalignLeft;
