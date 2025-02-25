import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRefraction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M1.776 19.492a1.1 1.1 0 0 0 1.467-.518L8.096 8.827l6.404 5.977a1.1 1.1 0 0 0 1.624-.136l4.527-5.919v1.75a1.1 1.1 0 0 0 2.2 0v-5a1.1 1.1 0 0 0-1.1-1.1h-5.5a1.1 1.1 0 0 0 0 2.2h3.274l-4.411 5.769-6.613-6.172a1.1 1.1 0 0 0-1.743.33l-5.5 11.5a1.1 1.1 0 0 0 .518 1.466"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRefraction;
