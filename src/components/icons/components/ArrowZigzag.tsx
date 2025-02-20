import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowZigzag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.505 14.607a.79.79 0 1 0-1.119 1.118l1.745 1.745H7.139a2.392 2.392 0 1 1 0-4.772h9.853a3.973 3.973 0 0 0-.134-7.944H5.825L7.57 3.009A.795.795 0 0 0 6.452 1.88l-3.08 3.08a.83.83 0 0 0-.236.564c.007.21.09.412.237.564l3.079 3.079a.78.78 0 0 0 1.118 0 .78.78 0 0 0 0-1.119L5.825 6.324h11.033a2.391 2.391 0 0 1 0 4.783H7.006a3.972 3.972 0 1 0 .133 7.943h11.002l-1.744 1.745a.79.79 0 0 0 0 1.119.778.778 0 0 0 1.119 0l3.078-3.08a.79.79 0 0 0 0-1.118z"
    />
  </svg>
);
export default SvgArrowZigzag;
