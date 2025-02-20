import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.446 22.25h-13.6a6.095 6.095 0 0 1-6.076-6.086V2.526a.776.776 0 0 1 1.553 0v13.638a4.533 4.533 0 0 0 4.523 4.533h13.6a.776.776 0 0 1 0 1.553m.508-5.875a.786.786 0 0 0 .086-1.102l-3.719-4.332a2.8 2.8 0 0 0-3.939-.326l-1.054.891a1.237 1.237 0 0 1-1.715-.115L7.338 6.667a.777.777 0 0 0-1.15 1.044l4.275 4.696a2.79 2.79 0 0 0 3.833.26l1.054-.892a1.246 1.246 0 0 1 1.745.143l3.728 4.37a.8.8 0 0 0 .584.27.77.77 0 0 0 .547-.183"
    />
  </svg>
);
export default SvgChartLineDown;
