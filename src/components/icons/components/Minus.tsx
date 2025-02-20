import * as React from "react";
import type { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 12c0-.635.453-1.15 1.011-1.15H19.74c.558 0 1.011.515 1.011 1.15s-.453 1.15-1.011 1.15H4.26c-.558 0-1.011-.515-1.011-1.15"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMinus;
