import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m11.77 15.92-2.84 2.46a1 1 0 0 1-.12.08l-.1.05a.63.63 0 0 1-.54 0l-.09-.05L8 18.4l-3.09-2.47a.77.77 0 0 1-.12-1.07.75.75 0 0 1 1.06-.12l1.84 1.49v-5.18a.75.75 0 1 1 1.5 0v5.1l1.61-1.39a.74.74 0 0 1 1 .08.77.77 0 0 1-.03 1.08m11 .36a6.43 6.43 0 0 1-6.37 6.47H7.59a6.43 6.43 0 0 1-6.37-6.47V7.72a6.43 6.43 0 0 1 6.37-6.47h6.46a.7.7 0 0 1 .19 0h.08a.7.7 0 0 1 .21.14l8 8.13a.76.76 0 0 1 .19.72.7.7 0 0 1 0 .15zm-8-9.47a2.56 2.56 0 0 0 2.53 2.57h2.91l-5.46-5.53zm6.53 9.47V10.9h-4a4.07 4.07 0 0 1-4-4.09v-4H7.59a4.91 4.91 0 0 0-4.87 4.91v8.56a4.91 4.91 0 0 0 4.87 4.95h8.82a4.91 4.91 0 0 0 4.87-4.95z"
    />
  </svg>
);
export default SvgFileDown;
