import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusSquared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.92 2.65a5.43 5.43 0 0 1 5.43 5.43v7.84a5.43 5.43 0 0 1-5.43 5.43H8.08a5.43 5.43 0 0 1-5.43-5.43V8.08a5.43 5.43 0 0 1 5.43-5.43zM7.33 12.93h9.34a.93.93 0 1 0 0-1.86H7.33a.93.93 0 0 0 0 1.86m8.59-11.68H8.08a6.83 6.83 0 0 0-6.83 6.83v7.84a6.83 6.83 0 0 0 6.83 6.83h7.84a6.83 6.83 0 0 0 6.83-6.83V8.08a6.83 6.83 0 0 0-6.83-6.83"
    />
  </svg>
);
export default SvgMinusSquared;
