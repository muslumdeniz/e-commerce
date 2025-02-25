import * as React from "react";
import type { SVGProps } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M19.433 6.1a1.084 1.084 0 0 0-1.534-1.532L12 10.467l-5.9-5.9a1.084 1.084 0 1 0-1.532 1.534L10.467 12l-5.9 5.9a1.084 1.084 0 0 0 1.534 1.533l5.899-5.9 5.9 5.9a1.084 1.084 0 0 0 1.533-1.534L13.533 12z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCross;
