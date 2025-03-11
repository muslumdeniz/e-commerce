import * as React from "react";
import type { SVGProps } from "react";
const SvgRightSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.19 22.73H7.81a6.57 6.57 0 0 1-6.56-6.56V7.78a6.56 6.56 0 0 1 6.56-6.55h8.38a6.56 6.56 0 0 1 6.56 6.55v8.39a6.57 6.57 0 0 1-6.56 6.56m-8.38-20a5.06 5.06 0 0 0-5.06 5.05v8.39a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.78a5.06 5.06 0 0 0-5.06-5.05zm3.82 13.5 3.49-3.64a1 1 0 0 0 0-1.42l-3.67-3.49a1.004 1.004 0 0 0-1.39 1.45l2.94 2.8-2.8 2.92a1 1 0 0 0 .72 1.69 1 1 0 0 0 .71-.31"
    />
  </svg>
);
export default SvgRightSquare;
