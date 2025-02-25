import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.293 1.4H7.76A6.36 6.36 0 0 0 1.4 7.76v8.586A6.36 6.36 0 0 0 7.76 22.6h8.586a6.36 6.36 0 0 0 6.254-6.307V7.76a6.36 6.36 0 0 0-6.307-6.36m1.982 15.603H5.725a.795.795 0 0 1 0-1.59h12.55a.795.795 0 0 1 0 1.59m0-4.24H5.725a.795.795 0 0 1 0-1.59h12.55a.795.795 0 0 1 0 1.59m0-4.24H5.725a.795.795 0 0 1 0-1.59h12.55a.795.795 0 1 1 0 1.59"
    />
  </svg>
);
export default SvgMenu;
