import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.43 22H7.57a3.73 3.73 0 0 1-3.72-3.72V5.72A3.73 3.73 0 0 1 7.57 2h8.86a3.73 3.73 0 0 1 3.72 3.72v12.56A3.73 3.73 0 0 1 16.43 22M7.57 3.5a2.23 2.23 0 0 0-2.22 2.22v12.56a2.23 2.23 0 0 0 2.22 2.22h8.86a2.23 2.23 0 0 0 2.22-2.22V5.72a2.23 2.23 0 0 0-2.22-2.22zM2.75 18.74V5.26a.75.75 0 0 0-1.5 0v13.48a.75.75 0 1 0 1.5 0m20 0V5.26a.75.75 0 1 0-1.5 0v13.48a.75.75 0 1 0 1.5 0"
    />
  </svg>
);
export default SvgSliderHorizontal;
