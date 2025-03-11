import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.06 8.74a6.78 6.78 0 0 0-6.61-6.43h-4.92a2.76 2.76 0 0 0-2.17-1.06H6.21A4.92 4.92 0 0 0 1.3 6.18v10.89A5.66 5.66 0 0 0 7 22.75h10.1a5.66 5.66 0 0 0 5.65-5.68v-5.72a5.7 5.7 0 0 0-.69-2.61m-2.32-2.38a5.6 5.6 0 0 0-2.69-.69h-3.17a2.77 2.77 0 0 1-2.58-1.76v-.07h4.18a5 5 0 0 1 4.26 2.52m1.43 10.71a4.14 4.14 0 0 1-4.12 4.15H7a4.14 4.14 0 0 1-4.12-4.15V6.18a3.39 3.39 0 0 1 3.38-3.4h2.1a1.26 1.26 0 0 1 1.17.8l.36.9a4.26 4.26 0 0 0 4 2.72h3.17a4.14 4.14 0 0 1 4.12 4.15z"
    />
    <path
      fill={props.color}
      d="M14.82 14.42H9.18a.75.75 0 1 1 0-1.5h5.64a.75.75 0 0 1 0 1.5"
    />
  </svg>
);
export default SvgMinusFolder;
