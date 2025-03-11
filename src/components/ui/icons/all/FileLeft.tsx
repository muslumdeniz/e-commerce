import * as React from "react";
import type { SVGProps } from "react";
const SvgFileLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.78 16.28a6.43 6.43 0 0 1-6.37 6.47H7.59a6.43 6.43 0 0 1-6.37-6.47V7.72a6.43 6.43 0 0 1 6.37-6.47h6.46a.7.7 0 0 1 .19 0h.08a.7.7 0 0 1 .21.14l8 8.13a.76.76 0 0 1 .19.72.7.7 0 0 1 0 .15zm-8-9.47a2.56 2.56 0 0 0 2.53 2.57h2.91l-5.47-5.53zm6.53 9.47V10.9h-4a4.07 4.07 0 0 1-4-4.09v-4H7.59a4.91 4.91 0 0 0-4.87 4.91v8.56a4.91 4.91 0 0 0 4.87 4.95h8.82a4.91 4.91 0 0 0 4.87-4.95z"
    />
    <path
      fill={props.color}
      d="M7.32 18.07a.77.77 0 0 1-.6-.29l-2.2-2.9a.74.74 0 0 1 0-.91l2.21-2.89a.752.752 0 0 1 1.19.92l-1.86 2.43 1.86 2.44a.75.75 0 0 1-.14 1.05.8.8 0 0 1-.46.15"
    />
    <path
      fill={props.color}
      d="M11.9 15.18H5.19a.75.75 0 0 1 0-1.5h6.71a.75.75 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgFileLeft;
