import * as React from "react";
import type { SVGProps } from "react";
const SvgElementPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.22 10.5h-5A1.77 1.77 0 0 1 2.5 8.73v-5A1.77 1.77 0 0 1 4.27 2h5A1.77 1.77 0 0 1 11 3.77v5a1.77 1.77 0 0 1-1.78 1.73M22.5 8.73v-5A1.78 1.78 0 0 0 20.73 2h-5A1.78 1.78 0 0 0 14 3.77v5a1.78 1.78 0 0 0 1.77 1.77h5a1.78 1.78 0 0 0 1.73-1.81M11 20.23v-5a1.77 1.77 0 0 0-1.78-1.73h-5a1.77 1.77 0 0 0-1.72 1.77v5A1.77 1.77 0 0 0 4.27 22h5A1.77 1.77 0 0 0 11 20.23m3.77-2.48 6.6-.75H19v-2.36a.75.75 0 1 0-1.5 0V17h-2.36a.75.75 0 1 0 0 1.5h2.36v2.36a.75.75 0 1 0 1.5 0V18.5h2.36a.75.75 0 1 0 0-1.5z"
    />
  </svg>
);
export default SvgElementPlus;
