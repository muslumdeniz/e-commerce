import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M6.06 11h11.76a4.82 4.82 0 0 0 0-9.63H6.06a4.82 4.82 0 0 0 0 9.63m0-8.15h11.76a3.34 3.34 0 1 1 0 6.67H6.06a3.34 3.34 0 0 1 0-6.67m9.58 3.34a1.85 1.85 0 0 1 2.562-1.718A1.86 1.86 0 0 1 19.35 6.19a1.86 1.86 0 0 1-3.71 0M8.28 17.56q.015.19 0 .38a1.86 1.86 0 0 1-3.71 0 1.6 1.6 0 0 1 0-.38 1.85 1.85 0 0 1 3.63 0zm9.54-4.44H6.06a4.82 4.82 0 0 0 0 9.63h11.76a4.82 4.82 0 0 0 0-9.63m0 8.15H6.06a3.34 3.34 0 0 1 0-6.67h11.76a3.34 3.34 0 1 1 0 6.67"
    />
  </svg>
);
export default SvgSwitch;
