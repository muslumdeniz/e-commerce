import * as React from "react";
import type { SVGProps } from "react";
const SvgRightLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M6.066 7.934a.8.8 0 0 1 0 1.132L3.93 11.2H20.07l-2.135-2.134a.8.8 0 0 1 1.132-1.132l3.5 3.5a.8.8 0 0 1 0 1.132l-3.5 3.5a.8.8 0 0 1-1.132-1.132L20.07 12.8H3.93l2.135 2.134a.8.8 0 0 1-1.132 1.132l-3.5-3.5a.8.8 0 0 1 0-1.132l3.5-3.5a.8.8 0 0 1 1.132 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRightLeft;
