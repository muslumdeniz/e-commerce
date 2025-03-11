import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckSquared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.92 2.65a5.43 5.43 0 0 1 5.43 5.43v7.84a5.43 5.43 0 0 1-5.43 5.43H8.08a5.43 5.43 0 0 1-5.43-5.43V8.08a5.43 5.43 0 0 1 5.43-5.43zm-4.85 10.83L8 10.4a1 1 0 0 0-.66-.27.94.94 0 0 0-.66 1.6l3.73 3.74a1 1 0 0 0 1.33 0l5.6-5.61a.94.94 0 0 0-.66-1.6 1 1 0 0 0-.66.27l-4.94 5m4.84-12.28H8.08a6.83 6.83 0 0 0-6.83 6.83v7.84a6.83 6.83 0 0 0 6.83 6.83h7.84a6.83 6.83 0 0 0 6.83-6.83V8.08a6.83 6.83 0 0 0-6.83-6.83"
    />
  </svg>
);
export default SvgCheckSquared;
