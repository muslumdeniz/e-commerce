import * as React from "react";
import type { SVGProps } from "react";
const SvgTextalignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.75 5.25H3.25a.75.75 0 0 1 0-1.5h17.5a.75.75 0 1 1 0 1.5M17.53 9.5a.76.76 0 0 0-.75-.75H7.22a.75.75 0 0 0 0 1.5h9.56a.76.76 0 0 0 .75-.75m4 5a.75.75 0 0 0-.75-.75H3.25a.75.75 0 1 0 0 1.5h17.5a.75.75 0 0 0 .75-.75zm-4 5a.76.76 0 0 0-.75-.75H7.22a.75.75 0 1 0 0 1.5h9.56a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgTextalignCenter;
