import * as React from "react";
import type { SVGProps } from "react";
const SvgUpSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 7.78v8.39a6.57 6.57 0 0 1-6.56 6.56H7.81a6.57 6.57 0 0 1-6.56-6.56V7.78a6.56 6.56 0 0 1 6.56-6.55h8.38a6.56 6.56 0 0 1 6.56 6.55m-20 8.39a5.07 5.07 0 0 0 5.06 5.06h8.38a5.07 5.07 0 0 0 5.06-5.06V7.78a5.06 5.06 0 0 0-5.06-5.05H7.81a5.06 5.06 0 0 0-5.06 5.05zm13.51-3.83-3.65-3.49a1 1 0 0 0-1.41 0l-3.49 3.68a1 1 0 1 0 1.44 1.38L12 11l2.93 2.8a1 1 0 0 0 1.41 0 1 1 0 0 0-.08-1.46"
    />
  </svg>
);
export default SvgUpSquare;
