import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.676 20.596H11.197l4.703-4.703 6.195-6.195a2.244 2.244 0 0 0 0-3.167L17.49 1.925a2.22 2.22 0 0 0-1.59-.655 2.2 2.2 0 0 0-1.577.655L8.127 8.12 1.93 14.315a2.244 2.244 0 0 0 0 3.221l4.606 4.553a2.22 2.22 0 0 0 1.59.655h13.55a1.073 1.073 0 1 0 0-2.148M15.46 3.063a.61.61 0 0 1 .44-.182.63.63 0 0 1 .45.182l4.607 4.65a.633.633 0 0 1 0 .89L15.9 13.617 10.403 8.12z"
    />
  </svg>
);
export default SvgEraser;
