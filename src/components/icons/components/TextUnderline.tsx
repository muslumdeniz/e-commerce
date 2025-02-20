import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.354 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.7a6.45 6.45 0 0 0-6.396-6.45m-.548 17.802H8.195a.806.806 0 1 1 0-1.613h7.61a.806.806 0 1 1 0 1.613m.806-8.009A4.773 4.773 0 0 1 12 15.967a4.773 4.773 0 0 1-4.612-4.924v-5.3a.806.806 0 1 1 1.613 0v5.3A3.225 3.225 0 0 0 12 14.354a3.225 3.225 0 0 0 3-3.31v-5.3a.806.806 0 1 1 1.612 0z"
    />
  </svg>
);
export default SvgTextUnderline;
