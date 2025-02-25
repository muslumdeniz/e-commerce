import * as React from "react";
import type { SVGProps } from "react";
const SvgSms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.92 2.36H5.58A4.58 4.58 0 0 0 1 6.94v10.115a4.58 4.58 0 0 0 4.58 4.58h12.34a4.58 4.58 0 0 0 4.58-4.58V6.94a4.58 4.58 0 0 0-4.58-4.579m-.279 6.342-3.537 3a3.63 3.63 0 0 1-4.719 0l-3.633-3a.82.82 0 1 1 1.075-1.236l3.633 3.021a2.03 2.03 0 0 0 2.634 0l3.547-3a.817.817 0 0 1 1.14.087.83.83 0 0 1-.14 1.128"
    />
  </svg>
);
export default SvgSms;
