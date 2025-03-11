import * as React from "react";
import type { SVGProps } from "react";
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 22.75H8a6.71 6.71 0 0 1-6.7-6.7V8A6.71 6.71 0 0 1 8 1.25h8.1A6.71 6.71 0 0 1 22.75 8v8.1a6.71 6.71 0 0 1-6.7 6.65M8 2.75A5.21 5.21 0 0 0 2.75 8v8.1A5.21 5.21 0 0 0 8 21.25h8.1a5.21 5.21 0 0 0 5.2-5.2V8a5.21 5.21 0 0 0-5.2-5.2zm9.5 4.78a.74.74 0 0 0-.75-.75h-3.41a.75.75 0 1 0 0 1.5h3.36a.75.75 0 0 0 .75-.75zm0 4.47a.75.75 0 0 0-.75-.75H8.24a.75.75 0 1 0 0 1.5h8.46a.75.75 0 0 0 .75-.75zm-.27 4.47a.76.76 0 0 0-.75-.75H10.7a.75.75 0 1 0 0 1.5h5.73a.75.75 0 0 0 .75-.75z"
    />
  </svg>
);
export default SvgBurgerMenu;
