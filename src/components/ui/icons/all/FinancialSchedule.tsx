import * as React from "react";
import type { SVGProps } from "react";
const SvgFinancialSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.303 1.31H7.665A6.415 6.415 0 0 0 1.25 7.725v8.553a6.414 6.414 0 0 0 6.415 6.415h8.67a6.415 6.415 0 0 0 6.415-6.415V7.725a6.416 6.416 0 0 0-6.447-6.415M8.35 17.347H5.89v-3.571a1.27 1.27 0 0 1 1.272-1.272H8.35zm5.645 0h-4.03V7.094a1.27 1.27 0 0 1 1.272-1.272h1.486a1.27 1.27 0 0 1 1.272 1.272zm4.052 0h-2.513v-6.66h1.24A1.27 1.27 0 0 1 18.047 12z"
    />
  </svg>
);
export default SvgFinancialSchedule;
