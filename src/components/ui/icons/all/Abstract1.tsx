import * as React from "react";
import type { SVGProps } from "react";
const SvgAbstract1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.75 22.58a2.21 2.21 0 0 1-1.84-1l-3.42-5.11a2.49 2.49 0 0 1 0-2.77l3.19-4.79-2.26-3.4A2.2 2.2 0 0 1 9 2.45l1-.66a2.15 2.15 0 0 1 1.65-.33 2.2 2.2 0 0 1 1.41.94l3.42 5.13a2.49 2.49 0 0 1 0 2.77l-3.19 4.79 2.26 3.4a2.15 2.15 0 0 1 .33 1.65 2.2 2.2 0 0 1-.88 1.41l-1 .66a2.2 2.2 0 0 1-1.25.37m-.59-1.81a.72.72 0 0 0 1 .2l1-.67a.72.72 0 0 0 .2-1L12 15.74a1.16 1.16 0 0 1 0-1.31l3.31-5a1 1 0 0 0 0-1.1l-3.47-5.1a.73.73 0 0 0-.725-.303.7.7 0 0 0-.255.103l-1 .67a.71.71 0 0 0-.2 1l2.39 3.58a1.16 1.16 0 0 1 0 1.31l-3.31 5a1 1 0 0 0 0 1.1z"
    />
  </svg>
);
export default SvgAbstract1;
