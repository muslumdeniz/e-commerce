import * as React from "react";
import type { SVGProps } from "react";
const SvgUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M3.064 16.849a1.17 1.17 0 0 1 0-1.697l8.287-8a1.275 1.275 0 0 1 1.758 0l7.827 7.555a1.17 1.17 0 0 1 0 1.697 1.275 1.275 0 0 1-1.758 0L12.23 9.697l-7.408 7.152a1.275 1.275 0 0 1-1.758 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUp;
