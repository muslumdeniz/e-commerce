import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.47 4.54H6a3.3 3.3 0 0 0-3.25 3.29v8.34A3.3 3.3 0 0 0 6 19.46h5.24a.75.75 0 0 1 0 1.5H6a4.8 4.8 0 0 1-4.79-4.79V7.83A4.8 4.8 0 0 1 6 3h5.43a.75.75 0 0 1 0 1.5zm11.28 3.29v8.34A4.8 4.8 0 0 1 18 21h-2.43v.23a.75.75 0 0 1-1.5 0V2.81a.75.75 0 1 1 1.5 0V3H18a4.8 4.8 0 0 1 4.75 4.83m-1.5 0A3.3 3.3 0 0 0 18 4.54h-2.43v14.92H18a3.3 3.3 0 0 0 3.29-3.29zM4.31 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m3.59 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
);
export default SvgPasswordCheck;
