import * as React from "react";
import type { SVGProps } from "react";
const SvgDevices = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.75 21.5H6.25a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h11.5a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5M6.25 4a3.5 3.5 0 0 0-3.5 3.5v9a3.5 3.5 0 0 0 3.5 3.5h11.5a3.5 3.5 0 0 0 3.5-3.5v-9a3.5 3.5 0 0 0-3.5-3.5zm1 5a1 1 0 1 0 .362.067A1 1 0 0 0 7.22 9zm2.93 0a1 1 0 1 0 .362.067A1 1 0 0 0 10.15 9zm7.46 1a.76.76 0 0 0-.75-.75h-3.31a.75.75 0 1 0 0 1.5h3.28a.76.76 0 0 0 .75-.75zm0 5.5a.76.76 0 0 0-.75-.75H7.22a.75.75 0 1 0 0 1.5h9.64a.76.76 0 0 0 .75-.75z"
    />
  </svg>
);
export default SvgDevices;
