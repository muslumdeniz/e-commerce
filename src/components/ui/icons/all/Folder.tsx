import * as React from "react";
import type { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.11 8.75q.008-.09 0-.18a6.48 6.48 0 0 0-6.3-6.26H11a.75.75 0 0 0-.36.1 2.81 2.81 0 0 0-2.3-1.16H6.18a4.93 4.93 0 0 0-4.93 4.93v10.89a5.68 5.68 0 0 0 5.68 5.68h10.14a5.68 5.68 0 0 0 5.68-5.68v-5.72a5.56 5.56 0 0 0-.64-2.6M20 6.49a5.7 5.7 0 0 0-2.93-.82h-3.18a2.78 2.78 0 0 1-2.59-1.76v-.07h4.57A4.73 4.73 0 0 1 20 6.49m1.22 10.58a4.15 4.15 0 0 1-4.15 4.15H6.93a4.15 4.15 0 0 1-4.15-4.15V6.18a3.4 3.4 0 0 1 3.4-3.4h2.16a1.24 1.24 0 0 1 1.17.8l.36.9a4.31 4.31 0 0 0 4 2.72h3.18a4.15 4.15 0 0 1 4.15 4.15z"
    />
  </svg>
);
export default SvgFolder;
