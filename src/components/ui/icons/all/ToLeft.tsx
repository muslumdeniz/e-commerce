import * as React from "react";
import type { SVGProps } from "react";
const SvgToLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.28 18.52a2.43 2.43 0 0 1-1.22-.33l-6.31-3.64a2.95 2.95 0 0 1 0-5.1l6.31-3.64a2.44 2.44 0 0 1 3.66 2.11v8.16a2.45 2.45 0 0 1-2.44 2.44M8.5 10.75a1.45 1.45 0 0 0 0 2.5l6.31 3.64a.94.94 0 0 0 .94 0 .92.92 0 0 0 .47-.81V7.92a.93.93 0 0 0-.47-.81.94.94 0 0 0-.94 0z"
    />
  </svg>
);
export default SvgToLeft;
