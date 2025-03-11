import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsCircleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75M13.34 7a1.34 1.34 0 1 1-2.68-.02 1.34 1.34 0 0 1 2.68.02m0 4.89a1.34 1.34 0 1 1 0-.01zm0 5.13a1.34 1.34 0 1 1 0-.02z"
    />
  </svg>
);
export default SvgDotsCircleVertical;
