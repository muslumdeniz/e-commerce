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
      d="M16.789 15.135h-3.94V2.855a.854.854 0 1 0-1.709 0v12.28H7.212a.534.534 0 0 0-.376.922l4.783 5.783a.535.535 0 0 0 .763 0l4.782-5.783a.535.535 0 0 0-.375-.922"
    />
  </svg>
);
export default SvgBlackDown;
