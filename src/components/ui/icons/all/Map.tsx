import * as React from "react";
import type { SVGProps } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.431 8.14a1.462 1.462 0 1 1 1.462 1.452 1.45 1.45 0 0 1-1.462-1.451M22.75 7.7v8.708a6.45 6.45 0 0 1-6.396 6.342H7.7a6.45 6.45 0 0 1-6.45-6.396V7.7A6.45 6.45 0 0 1 7.7 1.25h8.708A6.45 6.45 0 0 1 22.75 7.7M6.002 10.72l1.967 2.215a1.236 1.236 0 0 0 1.838 0l1.978-2.214a3.88 3.88 0 1 0-5.783 0m9.513 3.312 7.138-7.407a6.4 6.4 0 0 0-.559-1.742L5.454 22.191l-.087.129a6.3 6.3 0 0 0 1.806.43l7.224-7.525 5.633 5.73a.82.82 0 0 0 .538.236q.451-.405.827-.881a.7.7 0 0 0-.215-.484z"
    />
  </svg>
);
export default SvgMap;
