import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.15 7.29A.76.76 0 0 1 7.9 8v8a.75.75 0 0 1-1.5 0V8a.76.76 0 0 1 .75-.71m5.07-3.5a.76.76 0 0 0-.75-.79H6a4.8 4.8 0 0 0-4.75 4.83v8.34A4.8 4.8 0 0 0 6 21h5.24a.75.75 0 0 0 0-1.5H6a3.3 3.3 0 0 1-3.29-3.29V7.83A3.3 3.3 0 0 1 6 4.54h5.43a.75.75 0 0 0 .79-.75m10.53 4v8.34A4.8 4.8 0 0 1 18 21h-2.43v.23a.75.75 0 0 1-1.5 0V2.81a.75.75 0 1 1 1.5 0V3H18a4.8 4.8 0 0 1 4.75 4.83zm-1.5 0A3.3 3.3 0 0 0 18 4.54h-2.43v14.92H18a3.3 3.3 0 0 0 3.29-3.29z"
    />
  </svg>
);
export default SvgCheck1;
