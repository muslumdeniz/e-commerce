import * as React from "react";
import type { SVGProps } from "react";
const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.573 23h-15a2.65 2.65 0 0 1-1.295-.37 2.6 2.6 0 0 1-.939-.957 2.59 2.59 0 0 1 .011-2.578L5.795 13.1H18.35l3.5 5.995a2.59 2.59 0 0 1-.003 2.602 2.6 2.6 0 0 1-.961.952c-.4.229-.852.35-1.313.351M8.739 3.2v4.851L6.44 12h11.267l-2.3-3.949V3.2c.295 0 .577-.116.786-.322a1.095 1.095 0 0 0 0-1.556A1.12 1.12 0 0 0 15.406 1H8.739c-.295 0-.577.116-.786.322a1.094 1.094 0 0 0 0 1.556c.209.206.491.322.786.322"
    />
  </svg>
);
export default SvgFlask;
