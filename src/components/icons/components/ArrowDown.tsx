import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 1.642c-.615 0-1.114.499-1.114 1.114v15.8l-5.973-5.974a1.114 1.114 0 1 0-1.575 1.575l7.874 7.874c.435.435 1.14.435 1.575 0l7.875-7.874a1.114 1.114 0 0 0-1.575-1.575l-5.974 5.973v-15.8c0-.614-.498-1.113-1.113-1.113"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
