import * as React from "react";
import type { SVGProps } from "react";
const SvgLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M16.848 20.84a1.18 1.18 0 0 1-1.697 0l-8-8.198a1.25 1.25 0 0 1 0-1.74l7.556-7.742a1.18 1.18 0 0 1 1.697 0c.468.48.468 1.259 0 1.739l-6.707 6.873 7.151 7.329c.469.48.469 1.258 0 1.739"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLeft;
