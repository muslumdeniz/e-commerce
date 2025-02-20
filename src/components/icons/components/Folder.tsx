import * as React from "react";
import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m11.28 3.916-.355-.914A2.805 2.805 0 0 0 8.324 1.25h-2.15A4.923 4.923 0 0 0 1.25 6.184v10.89a5.676 5.676 0 0 0 5.633 5.676h10.202a5.665 5.665 0 0 0 5.665-5.676v-5.73a5.676 5.676 0 0 0-5.665-5.676H13.86a2.805 2.805 0 0 1-2.58-1.752"
    />
  </svg>
);
export default SvgFolder;
