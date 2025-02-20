import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M19.323 19.324a1.114 1.114 0 0 1-1.575 0L6.576 8.152V16.6a1.114 1.114 0 1 1-2.227 0V5.464c0-.615.499-1.114 1.114-1.114h11.136a1.114 1.114 0 1 1 0 2.227H8.15L19.323 17.75c.435.435.435 1.14 0 1.575"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpLeft;
