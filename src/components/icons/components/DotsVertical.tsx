import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M13.7 5.45a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0m0 6.55a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0M12 20.25a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDotsVertical;
