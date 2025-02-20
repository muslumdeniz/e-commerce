import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.643 12c0-.615.498-1.114 1.113-1.114h15.8l-5.974-5.973a1.114 1.114 0 0 1 1.575-1.575l7.874 7.874c.435.435.435 1.14 0 1.575l-7.874 7.875a1.114 1.114 0 0 1-1.575-1.575l5.973-5.974H2.756A1.114 1.114 0 0 1 1.643 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
