import * as React from "react";
import type { SVGProps } from "react";
const SvgBookSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17 23.49H7a5.74 5.74 0 0 1-5.73-5.74v-10A5.74 5.74 0 0 1 7 2h10a5.74 5.74 0 0 1 5.73 5.74v10A5.74 5.74 0 0 1 17 23.49M7 3.5a4.24 4.24 0 0 0-4.24 4.24v10A4.24 4.24 0 0 0 7 22h10a4.24 4.24 0 0 0 4.23-4.24v-10A4.24 4.24 0 0 0 17 3.5zm11.48 3a1.92 1.92 0 0 0-1.57-.5c-1.68.292-3.294.878-4.77 1.73a.24.24 0 0 1-.29 0 13.8 13.8 0 0 0-4.79-1.66A1.9 1.9 0 0 0 4.87 8v7.92a1.86 1.86 0 0 0 1.58 1.86c1.652.297 3.25.84 4.74 1.61.265.1.547.15.83.15.295.006.586-.06.85-.19a15.7 15.7 0 0 1 4.7-1.54 1.89 1.89 0 0 0 1.56-1.87v-8a1.88 1.88 0 0 0-.66-1.47zM6.69 16.25a.38.38 0 0 1-.32-.38V8a.41.41 0 0 1 .14-.31.37.37 0 0 1 .25-.09h.06a12.4 12.4 0 0 1 4.28 1.46l.15.06v8.59a18 18 0 0 0-4.56-1.46m10.94-.36a.39.39 0 0 1-.31.39 17.6 17.6 0 0 0-4.57 1.42V9.12a1 1 0 0 0 .13-.06 13 13 0 0 1 4.26-1.55.43.43 0 0 1 .452.23.4.4 0 0 1 .038.16z"
    />
  </svg>
);
export default SvgBookSquare;
