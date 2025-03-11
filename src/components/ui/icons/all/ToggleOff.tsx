import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.83 20.94H6.17A4.92 4.92 0 0 1 1.25 16V8a4.92 4.92 0 0 1 4.92-4.94h11.66A4.92 4.92 0 0 1 22.75 8v8a4.92 4.92 0 0 1-4.92 4.94M6.17 4.56A3.42 3.42 0 0 0 2.75 8v8a3.42 3.42 0 0 0 3.42 3.42h11.66A3.42 3.42 0 0 0 21.25 16V8a3.42 3.42 0 0 0-3.42-3.42zm5.42 12.32H7.76a3.26 3.26 0 0 1-3.25-3.25V10a3.26 3.26 0 0 1 3.25-3.22h3.83A3.26 3.26 0 0 1 14.84 10v3.6a3.26 3.26 0 0 1-3.25 3.28m-3.83-8.6A1.75 1.75 0 0 0 6 10v3.6a1.75 1.75 0 0 0 1.75 1.75h3.83a1.76 1.76 0 0 0 1.75-1.75V10a1.75 1.75 0 0 0-1.75-1.75z"
    />
  </svg>
);
export default SvgToggleOff;
