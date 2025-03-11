import * as React from "react";
import type { SVGProps } from "react";
const SvgSubtitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.05 22.75H8a6.71 6.71 0 0 1-6.7-6.7V8A6.71 6.71 0 0 1 8 1.25h8.1A6.71 6.71 0 0 1 22.75 8v8.1a6.71 6.71 0 0 1-6.7 6.65M8 2.75A5.2 5.2 0 0 0 2.75 8v8.1A5.2 5.2 0 0 0 8 21.25h8.1a5.21 5.21 0 0 0 5.2-5.2V8a5.21 5.21 0 0 0-5.2-5.2zm5.23 10.5a.75.75 0 0 0-.75-.75H5.12a.75.75 0 1 0 0 1.5h7.31a.76.76 0 0 0 .75-.75zm6.45 0a.75.75 0 0 0-.75-.75h-3.26a.75.75 0 1 0 0 1.5h3.21a.76.76 0 0 0 .75-.75zm0 3.51a.76.76 0 0 0-.75-.75h-7.36a.75.75 0 1 0 0 1.5h7.31a.75.75 0 0 0 .75-.75zm-10.55 0a.75.75 0 0 0-.8-.76H5.12a.75.75 0 1 0 0 1.5h3.21a.74.74 0 0 0 .75-.74z"
    />
  </svg>
);
export default SvgSubtitle;
