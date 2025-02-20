import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 22.357a1.114 1.114 0 0 1-1.114-1.113v-15.8l-5.973 5.974a1.114 1.114 0 1 1-1.575-1.575l7.874-7.874a1.114 1.114 0 0 1 1.575 0l7.875 7.874a1.114 1.114 0 1 1-1.575 1.575l-5.973-5.974v15.8c0 .615-.5 1.113-1.114 1.113"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUp;
