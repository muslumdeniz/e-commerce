import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.72 20.78h-4.9a5.38 5.38 0 0 1-5.36-5.37V6.73a5.37 5.37 0 0 1 5.36-5.36h8.69a5.36 5.36 0 0 1 5.36 5.36V12a.75.75 0 0 1-1.5 0V6.73a3.86 3.86 0 0 0-3.86-3.86H6.82A3.86 3.86 0 0 0 3 6.73v8.68a3.87 3.87 0 0 0 3.86 3.87h4.9a.75.75 0 0 1 0 1.5zm7 .49.57-1.65a.69.69 0 0 1 .4-.4l1.57-.56a2.2 2.2 0 0 0-.08-4.17l-5.51-1.74a2.27 2.27 0 0 0-2.85 2.82l1.72 5.62a2.16 2.16 0 0 0 2.06 1.56h.05a2.16 2.16 0 0 0 2.12-1.48zm-3.5-7.09 5.51 1.74a.7.7 0 0 1 0 1.33l-1.57.56a2.15 2.15 0 0 0-1.3 1.32l-.57 1.65a.7.7 0 0 1-1.33 0l-1.72-5.63a.77.77 0 0 1 .72-1 1 1 0 0 1 .31.03z"
    />
  </svg>
);
export default SvgMouseSquare;
