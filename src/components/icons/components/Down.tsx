import * as React from "react";
import type { SVGProps } from "react";
const SvgDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M20.936 7.151a1.17 1.17 0 0 1 0 1.697l-8.287 8a1.275 1.275 0 0 1-1.758 0L3.064 9.293a1.17 1.17 0 0 1 0-1.697 1.275 1.275 0 0 1 1.758 0l6.948 6.707 7.408-7.152a1.275 1.275 0 0 1 1.758 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDown;
