import * as React from "react";
import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 12.67a5.71 5.71 0 1 1 0-11.418 5.71 5.71 0 0 1 0 11.418m0-9.92A4.21 4.21 0 1 0 16.21 7 4.22 4.22 0 0 0 12 2.75m7.7 20H4.3a2 2 0 0 1-1.54-.7 1.74 1.74 0 0 1-.4-1.41c.7-4.15 4.85-7.28 9.64-7.28s8.94 3.13 9.64 7.28a1.74 1.74 0 0 1-.4 1.41 2 2 0 0 1-1.54.7M12 14.86c-4.07 0-7.58 2.59-8.16 6a.24.24 0 0 0 .06.19.5.5 0 0 0 .4.17h15.4a.51.51 0 0 0 .4-.17.24.24 0 0 0 .06-.19c-.58-3.41-4.09-6-8.16-6"
    />
  </svg>
);
export default SvgUser;
