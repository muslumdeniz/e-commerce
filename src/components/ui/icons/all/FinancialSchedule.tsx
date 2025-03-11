import * as React from "react";
import type { SVGProps } from "react";
const SvgFinancialSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M16 1.75H8a6.72 6.72 0 0 0-6.74 6.7v8.08A6.72 6.72 0 0 0 8 23.25h8.12a6.73 6.73 0 0 0 6.71-6.71V8.46a6.72 6.72 0 0 0-6.73-6.71zm5.21 14.79A5.21 5.21 0 0 1 16 21.75H8a5.21 5.21 0 0 1-5.21-5.21V8.46A5.22 5.22 0 0 1 8 3.25h8.11a5.22 5.22 0 0 1 5.21 5.21zm-4.77-6h-1.81V7.91A1.94 1.94 0 0 0 12.69 6H11.3a1.94 1.94 0 0 0-1.94 1.91v4.31H7.49a1.94 1.94 0 0 0-1.94 1.94v3.36a.76.76 0 0 0 .75.75h11.37a.77.77 0 0 0 .75-.75v-5.06a1.92 1.92 0 0 0-1.94-1.92zm-9.39 3.62a.44.44 0 0 1 .44-.44h1.87v3H7.05zM10.86 13V7.91a.44.44 0 0 1 .44-.44h1.39a.44.44 0 0 1 .44.44v8.86h-2.27zM17 16.77h-2.37V12h1.85a.44.44 0 0 1 .44.44z"
    />
  </svg>
);
export default SvgFinancialSchedule;
