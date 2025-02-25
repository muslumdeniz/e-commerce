import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRefraction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.776 4.508a1.1 1.1 0 0 1 1.467.518l4.853 10.147L14.5 9.196a1.1 1.1 0 0 1 1.624.136l4.526 5.919V13.5a1.1 1.1 0 1 1 2.2 0v5a1.1 1.1 0 0 1-1.1 1.1h-5.5a1.1 1.1 0 1 1 0-2.2h3.274l-4.41-5.769L8.5 17.804a1.1 1.1 0 0 1-1.743-.33l-5.5-11.5a1.1 1.1 0 0 1 .518-1.466"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownRefraction;
