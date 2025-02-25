import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.135 7.212v3.94H2.855a.854.854 0 0 0 0 1.708h12.28v3.929a.536.536 0 0 0 .922.375l5.783-4.783a.533.533 0 0 0 0-.762l-5.783-4.783a.535.535 0 0 0-.922.376"
    />
  </svg>
);
export default SvgBlackRight;
