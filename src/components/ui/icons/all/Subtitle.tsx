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
      d="M16.354 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.7a6.45 6.45 0 0 0-6.396-6.45M4.604 12.538h7.858a.806.806 0 1 1 0 1.612H4.604a.806.806 0 1 1 0-1.613m3.45 5.375h-3.45a.806.806 0 1 1 0-1.613h3.45a.806.806 0 1 1 0 1.613m11.342 0h-7.858a.806.806 0 1 1 0-1.613h7.858a.806.806 0 1 1 0 1.613m0-3.774h-3.45a.806.806 0 0 1 0-1.612h3.45a.806.806 0 1 1 0 1.612"
    />
  </svg>
);
export default SvgSubtitle;
