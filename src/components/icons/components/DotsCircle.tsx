import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.011 1a11 11 0 1 0-.022 22 11 11 0 0 0 .022-22M7.005 13.299a1.376 1.376 0 1 1 1.365-1.377A1.365 1.365 0 0 1 7.005 13.3m5.128 0a1.376 1.376 0 1 1-.022-2.753 1.376 1.376 0 0 1 .022 2.753m5.128 0a1.376 1.376 0 1 1 .067-2.752 1.376 1.376 0 0 1-.067 2.752"
    />
  </svg>
);
export default SvgDotsCircle;
