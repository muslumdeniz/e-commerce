import * as React from "react";
import type { SVGProps } from "react";
const SvgAirpod = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.669 9.173h4.536v8.933a4.633 4.633 0 0 1-4.644 4.644H6.424a4.633 4.633 0 0 1-4.644-4.644V9.173h4.537a2.59 2.59 0 0 0 2.45 1.752h6.45a2.59 2.59 0 0 0 2.452-1.752M17.56 1.25H6.424A4.633 4.633 0 0 0 1.78 5.894V7.56h4.537a2.59 2.59 0 0 1 2.45-1.795h6.45A2.59 2.59 0 0 1 17.68 7.56h4.526V5.894a4.633 4.633 0 0 0-4.644-4.644"
    />
  </svg>
);
export default SvgAirpod;
