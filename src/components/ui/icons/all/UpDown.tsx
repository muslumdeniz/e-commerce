import * as React from "react";
import type { SVGProps } from "react";
const SvgUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M7.934 17.934a.8.8 0 0 1 1.132 0L11.2 20.07V3.93L9.066 6.066a.8.8 0 1 1-1.132-1.132l3.5-3.5a.8.8 0 0 1 1.132 0l3.5 3.5a.8.8 0 0 1-1.132 1.132L12.8 3.93V20.07l2.134-2.135a.8.8 0 1 1 1.132 1.132l-3.5 3.5a.8.8 0 0 1-1.132 0l-3.5-3.5a.8.8 0 0 1 0-1.132"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUpDown;
