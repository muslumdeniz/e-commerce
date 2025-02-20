import * as React from "react";
import type { SVGProps } from "react";
const SvgDesign1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.334 5.458A17.804 17.804 0 0 1 5.478 21.314a2.094 2.094 0 1 1-.105-2.094A15.71 15.71 0 0 0 19.23 5.353a2.095 2.095 0 1 1 2.095.105zm.095 13.102v-7.331a19.6 19.6 0 0 1-2.095 3.718v3.644a2.094 2.094 0 1 0 2.095 0zM17.564 5.992a3.65 3.65 0 0 1-.848-2.388h-8.2a4.89 4.89 0 0 0-4.892 4.891v8.2a3.65 3.65 0 0 1 2.346.849A14.25 14.25 0 0 0 17.564 5.95z"
    />
  </svg>
);
export default SvgDesign1;
