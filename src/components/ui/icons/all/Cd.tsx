import * as React from "react";
import type { SVGProps } from "react";
const SvgCd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 15.25A3.25 3.25 0 1 1 15.25 12 3.26 3.26 0 0 1 12 15.25m0-5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0 12.5A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75"
    />
  </svg>
);
export default SvgCd;
