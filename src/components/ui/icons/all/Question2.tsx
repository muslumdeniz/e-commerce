import * as React from "react";
import type { SVGProps } from "react";
const SvgQuestion2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75"
    />
    <path
      fill={props.color}
      d="M12 15a.75.75 0 0 1-.75-.75v-.82A2.67 2.67 0 0 1 12.71 11a1.628 1.628 0 0 0 .157-2.847A1.63 1.63 0 0 0 10.37 9.53a.75.75 0 1 1-1.5 0 3.14 3.14 0 0 1 3.69-3.08A3.15 3.15 0 0 1 15.08 9a3.11 3.11 0 0 1-1.72 3.38 1.17 1.17 0 0 0-.61 1.06v.82A.75.75 0 0 1 12 15M12 17.59a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
  </svg>
);
export default SvgQuestion2;
