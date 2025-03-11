import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75m-1.22 9.19a1.34 1.34 0 1 0 2.681 0 1.34 1.34 0 0 0-2.681 0m-5 0A1.34 1.34 0 1 0 7.1 10.6a1.34 1.34 0 0 0-1.34 1.34zm10 0a1.34 1.34 0 1 0 1.34-1.34 1.34 1.34 0 0 0-1.33 1.34z"
    />
  </svg>
);
export default SvgDotsCircle;
