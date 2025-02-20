import * as React from "react";
import type { SVGProps } from "react";
const SvgReceiptSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.042 1.25H6.958A5.697 5.697 0 0 0 1.25 6.958v10.084a5.697 5.697 0 0 0 5.708 5.708h10.084a5.7 5.7 0 0 0 5.708-5.708V6.958a5.7 5.7 0 0 0-5.708-5.708m.333 14.083v1.376a.88.88 0 0 1-1.634.44l-.42-.72a.74.74 0 0 0-1.278 0l-.57 1a1.698 1.698 0 0 1-2.935 0l-.58-1.01a.732.732 0 0 0-1.269 0l-.44.752a.87.87 0 0 1-1.624-.452V7.84a2.15 2.15 0 0 1 2.15-2.15h6.45a2.15 2.15 0 0 1 2.15 2.15z"
    />
  </svg>
);
export default SvgReceiptSquare;
