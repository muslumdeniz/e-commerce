import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.865 16.788v-3.94h12.281a.854.854 0 0 0 0-1.708H8.866V7.211a.535.535 0 0 0-.923-.375L2.16 11.618a.535.535 0 0 0 0 .763l5.783 4.783a.536.536 0 0 0 .922-.376"
    />
  </svg>
);
export default SvgBlackLeft;
