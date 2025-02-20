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
      d="M16.354 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.7a6.45 6.45 0 0 0-6.396-6.45m2.72 12.05H6.624a.806.806 0 0 1 0-1.612h12.449a.806.806 0 1 1 0 1.613m-7.708-7.277h3.279a.806.806 0 0 1 0 1.613h-3.28a1.613 1.613 0 0 0-.87 2.977H8.442A3.2 3.2 0 0 1 8.14 9.26a3.225 3.225 0 0 1 3.225-3.236m1.816 11.352H9.958a.806.806 0 1 1 0-1.613h3.225a1.62 1.62 0 0 0 1.592-1.354h1.612a3.225 3.225 0 0 1-3.203 2.967"
    />
  </svg>
);
export default SvgTextStrikethrough;
