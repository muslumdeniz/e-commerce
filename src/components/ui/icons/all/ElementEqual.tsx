import * as React from "react";
import type { SVGProps } from "react";
const SvgElementEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.47 10.5h-5a1.77 1.77 0 0 1-1.72-1.77v-5A1.77 1.77 0 0 1 3.52 2h5a1.78 1.78 0 0 1 1.77 1.77v5a1.78 1.78 0 0 1-1.82 1.73m13.27-1.77v-5A1.77 1.77 0 0 0 20 2h-5a1.77 1.77 0 0 0-1.77 1.77v5A1.77 1.77 0 0 0 15 10.5h5a1.77 1.77 0 0 0 1.74-1.77m-11.5 11.5v-5a1.78 1.78 0 0 0-1.77-1.73h-5a1.77 1.77 0 0 0-1.77 1.77v5A1.77 1.77 0 0 0 3.52 22h5a1.78 1.78 0 0 0 1.72-1.77m11.5-.56a.76.76 0 0 0-.75-.75H14a.75.75 0 1 0 0 1.5h7a.75.75 0 0 0 .74-.75m0-3.84a.75.75 0 0 0-.75-.75H14a.75.75 0 1 0 0 1.5h7a.76.76 0 0 0 .74-.75"
    />
  </svg>
);
export default SvgElementEqual;
