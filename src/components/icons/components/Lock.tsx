import * as React from "react";
import type { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.752 16.01a1.752 1.752 0 1 1-3.503 0 1.752 1.752 0 0 1 3.503 0m8.998-2.548v5.096a4.203 4.203 0 0 1-4.203 4.192H5.453a4.203 4.203 0 0 1-4.203-4.192v-5.096A4.19 4.19 0 0 1 5.249 9.28V7.077a5.85 5.85 0 0 1 5.837-5.827h1.828a5.85 5.85 0 0 1 5.837 5.837V9.28a4.19 4.19 0 0 1 3.999 4.182M6.862 7.077v2.15h10.277v-2.15a4.225 4.225 0 0 0-4.225-4.225h-1.828a4.225 4.225 0 0 0-4.224 4.225m8.503 8.933a3.365 3.365 0 1 0-6.73 0 3.365 3.365 0 0 0 6.73 0"
    />
  </svg>
);
export default SvgLock;
