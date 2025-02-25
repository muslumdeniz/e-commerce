import * as React from "react";
import type { SVGProps } from "react";
const SvgGeolocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.864.563a9.835 9.835 0 0 0-6.185 16.33l5.033 5.586a3.11 3.11 0 0 0 4.607 0l5.01-5.585A9.847 9.847 0 0 0 10.863.563m1.151 13.567a3.893 3.893 0 1 1 0-7.787 3.893 3.893 0 0 1 0 7.787"
    />
  </svg>
);
export default SvgGeolocation;
