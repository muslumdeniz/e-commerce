import * as React from "react";
import type { SVGProps } from "react";
const SvgYii = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M1.637 2.962a9.4 9.4 0 0 1 8.832 1.005 15.8 15.8 0 0 1 6.183 11.404s-1.38-2.616-6.128-3.764c-4.747-1.149-9.307-2.661-8.887-8.645m10.687 11.04a31 31 0 0 1-1.645 2.208A7.57 7.57 0 0 0 9.11 23a8.13 8.13 0 0 0 7.044-4.99 7.25 7.25 0 0 0-3.831-4.04zm5.785.066c.159-.047.3-.14.408-.264 2.463-2.816 6.547-8.744 1.358-12.62a.95.95 0 0 0-.75-.165 5.15 5.15 0 0 0-4.151 3.776q-.15.597-.177 1.214a18.6 18.6 0 0 1 3.312 8.026z"
    />
  </svg>
);
export default SvgYii;
