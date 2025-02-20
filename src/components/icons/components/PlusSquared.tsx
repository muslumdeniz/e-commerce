import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusSquared = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.504 22.75H7.485a6.257 6.257 0 0 1-6.235-6.246V7.496A6.256 6.256 0 0 1 7.485 1.25h9.009a6.246 6.246 0 0 1 6.256 6.235v9.009a6.245 6.245 0 0 1-6.246 6.256m.871-11.825h-4.3v-4.3a1.075 1.075 0 0 0-2.15 0v4.3h-4.3a1.075 1.075 0 0 0 0 2.15h4.3v4.3a1.075 1.075 0 0 0 2.15 0v-4.3h4.3a1.075 1.075 0 0 0 0-2.15"
    />
  </svg>
);
export default SvgPlusSquared;
