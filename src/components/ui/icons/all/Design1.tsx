import * as React from "react";
import type { SVGProps } from "react";
const SvgDesign1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4 17.11a.76.76 0 0 1-.75-.75V8.72a5.44 5.44 0 0 1 5.46-5.43H16a.75.75 0 1 1 0 1.5H8.71a3.93 3.93 0 0 0-3.93 3.93v7.64a.75.75 0 0 1-.78.75m16.75 1.16V5.73A1.89 1.89 0 0 0 20 2.14a1.89 1.89 0 0 0-.82 3.59C18 15.71 9.59 18.56 5.81 19.34a1.89 1.89 0 1 0-.12 1.53C8.9 20.23 16.13 18 19.28 11v7.24a1.9 1.9 0 1 0 1.5.06z"
    />
  </svg>
);
export default SvgDesign1;
