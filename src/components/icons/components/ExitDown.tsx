import * as React from "react";
import type { SVGProps } from "react";
const SvgExitDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 6.129v4.657a4.313 4.313 0 0 1-4.173 4.4H12.83V7.971a.81.81 0 0 0-.862-.797.82.82 0 0 0-.83.797v7.213H5.434a4.313 4.313 0 0 1-4.183-4.399V6.13A4.313 4.313 0 0 1 5.434 1.73h13.153a4.313 4.313 0 0 1 4.162 4.399m-11.57 13.41-1.79-1.747a.84.84 0 0 0-1.345.257.78.78 0 0 0 .181.875l3.235 3.116a.83.83 0 0 0 1.153 0l3.235-3.116a.8.8 0 0 0 .237-.572.76.76 0 0 0-.237-.56.84.84 0 0 0-1.164 0l-1.855 1.746v-4.353h-1.65z"
    />
  </svg>
);
export default SvgExitDown;
