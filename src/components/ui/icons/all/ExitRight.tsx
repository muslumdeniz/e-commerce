import * as React from "react";
import type { SVGProps } from "react";
const SvgExitRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.928 12.825h7.286v5.755a4.343 4.343 0 0 1-4.441 4.169H6.06a4.343 4.343 0 0 1-4.441-4.17V5.465A4.343 4.343 0 0 1 6.06 1.25h4.713a4.343 4.343 0 0 1 4.44 4.213v5.754H7.929a.825.825 0 0 0 0 1.64zm14.203-1.4-3.16-3.193a.78.78 0 0 0-1.085 0 .814.814 0 0 0 0 1.151l1.77 1.803h-4.442v1.64H19.6l-1.77 1.801a.814.814 0 0 0 .883 1.33.8.8 0 0 0 .257-.179l3.16-3.192a.836.836 0 0 0 0-1.162"
    />
  </svg>
);
export default SvgExitRight;
