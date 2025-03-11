import * as React from "react";
import type { SVGProps } from "react";
const SvgTextStrikethrough = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 1.25H8A6.71 6.71 0 0 0 1.25 8v8.1A6.71 6.71 0 0 0 8 22.75h8.1a6.71 6.71 0 0 0 6.7-6.7V8a6.71 6.71 0 0 0-6.75-6.75m5.2 14.8a5.21 5.21 0 0 1-5.2 5.2H8a5.21 5.21 0 0 1-5.2-5.2V8A5.21 5.21 0 0 1 8 2.75h8.1A5.21 5.21 0 0 1 21.25 8zm-2.71-3.3a.75.75 0 0 1-.75.75H15.2c.072.247.109.503.11.76a3 3 0 0 1-3 3h-3a.75.75 0 1 1 0-1.5h3a1.5 1.5 0 0 0 1.3-2.26h-7.4a.75.75 0 1 1 0-1.5h2.46a3 3 0 0 1-1.06-2.26 3 3 0 0 1 3-3h3a.75.75 0 0 1 0 1.5h-3a1.51 1.51 0 1 0 0 3h1.69a3 3 0 0 1 2 .75h3.52a.76.76 0 0 1 .72.76"
    />
  </svg>
);
export default SvgTextStrikethrough;
