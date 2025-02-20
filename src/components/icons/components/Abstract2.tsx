import * as React from "react";
import type { SVGProps } from "react";
const SvgAbstract2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.3 5.7V12a6.3 6.3 0 1 1-12.6 0V5.7zm3.15-4.2H2.55A1.05 1.05 0 0 0 1.5 2.55V12a10.5 10.5 0 1 0 21 0V2.55a1.05 1.05 0 0 0-1.05-1.05"
    />
  </svg>
);
export default SvgAbstract2;
