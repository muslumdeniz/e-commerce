import * as React from "react";
import type { SVGProps } from "react";
const SvgLts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="m16.77 16.19-.33 1.09a.86.86 0 0 1-.82.61H9.8a.86.86 0 0 1-.8-1.1l.87-3.08-1.75.35h-.15a.75.75 0 0 1-.15-1.49l2.51-.5 1.24-4.35a.86.86 0 0 1 .83-.63h1.32a.87.87 0 0 1 .84 1.09l-.89 3.22 1.76-.36a.76.76 0 0 1 .882.883.74.74 0 0 1-.592.587l-2.5.51-.41 1.48a.44.44 0 0 0 .42.55H16a.86.86 0 0 1 .77 1.14m6-3.69A10.75 10.75 0 1 0 12 23.25 10.76 10.76 0 0 0 22.75 12.5zm-1.5 0A9.25 9.25 0 1 1 12 3.25a9.26 9.26 0 0 1 9.25 9.25z"
    />
  </svg>
);
export default SvgLts;
