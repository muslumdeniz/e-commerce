import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.809 3H5.69A4.69 4.69 0 0 0 1 7.714v9a4.69 4.69 0 0 0 4.691 4.69H18.81a4.69 4.69 0 0 0 4.69-4.69v-9A4.69 4.69 0 0 0 18.81 3m1.023 11.047a2.81 2.81 0 0 1-2.812 2.813H12.71A2.813 2.813 0 0 1 9.9 14.047V9.964A2.81 2.81 0 0 1 12.71 7.15h4.309a2.813 2.813 0 0 1 2.812 2.813z"
    />
  </svg>
);
export default SvgToggleOn;
