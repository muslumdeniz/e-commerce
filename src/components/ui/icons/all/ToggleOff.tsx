import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.559 2.8H5.44a4.69 4.69 0 0 0-4.69 4.714v9a4.69 4.69 0 0 0 4.69 4.691H18.56a4.69 4.69 0 0 0 4.69-4.691v-9A4.69 4.69 0 0 0 18.56 2.8M14.35 13.848a2.813 2.813 0 0 1-2.812 2.812H7.23a2.81 2.81 0 0 1-2.812-2.812V9.764A2.81 2.81 0 0 1 7.23 6.95h4.309a2.813 2.813 0 0 1 2.812 2.813z"
    />
  </svg>
);
export default SvgToggleOff;
