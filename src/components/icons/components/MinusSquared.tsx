import * as React from "react";
import type { SVGProps } from "react";
const SvgMinusSquared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.504 22.75H7.485a6.257 6.257 0 0 1-6.235-6.246V7.496A6.256 6.256 0 0 1 7.485 1.25h9.009a6.246 6.246 0 0 1 6.256 6.235v9.009a6.245 6.245 0 0 1-6.246 6.256M18.45 12a1.075 1.075 0 0 0-1.075-1.075H6.625a1.075 1.075 0 0 0 0 2.15h10.75A1.075 1.075 0 0 0 18.45 12"
    />
  </svg>
);
export default SvgMinusSquared;
