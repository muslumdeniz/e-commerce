import * as React from "react";
import type { SVGProps } from "react";
const SvgDisguise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m0 16.093a1.826 1.826 0 0 1-2.541 1.727 7.381 7.381 0 0 1 0-13.64A1.815 1.815 0 0 1 12 6.874z"
    />
  </svg>
);
export default SvgDisguise;
