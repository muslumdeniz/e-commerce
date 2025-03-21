import * as React from "react";
import type { SVGProps } from "react";
const SvgAddFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15 13.56a.77.77 0 0 1-.77.76h-1.65v1.65a.76.76 0 0 1-.74.79.76.76 0 0 1-.76-.74L11 14.29H9.29a.77.77 0 0 1-.76-.77.78.78 0 0 1 .78-.76h1.65v-1.65a.77.77 0 0 1 .74-.79.74.74 0 0 1 .79.75v1.7h1.72a.77.77 0 0 1 .79.79m7.07-4.82a6.78 6.78 0 0 0-6.61-6.43h-4.93a2.76 2.76 0 0 0-2.17-1.06H6.21A4.92 4.92 0 0 0 1.3 6.18v10.89A5.66 5.66 0 0 0 7 22.75h10.1a5.66 5.66 0 0 0 5.65-5.68v-5.72a5.7 5.7 0 0 0-.69-2.61zm-2.33-2.38a5.6 5.6 0 0 0-2.69-.69h-3.17a2.77 2.77 0 0 1-2.58-1.76v-.07h4.18a5 5 0 0 1 4.26 2.52m1.43 10.71a4.14 4.14 0 0 1-4.12 4.15H7a4.14 4.14 0 0 1-4.12-4.15V6.18a3.39 3.39 0 0 1 3.38-3.4h2.1a1.26 1.26 0 0 1 1.17.8l.36.9a4.26 4.26 0 0 0 4 2.72h3.17a4.14 4.14 0 0 1 4.12 4.15z"
    />
  </svg>
);
export default SvgAddFolder;
