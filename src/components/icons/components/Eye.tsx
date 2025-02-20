import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.135 12.006A3.136 3.136 0 1 1 12 8.871a3.146 3.146 0 0 1 3.135 3.135m7.865 0c0 4.4-5.5 9.416-11 9.416-5.203 0-11-5.28-11-9.416C1 7.672 6.797 2.59 12 2.59s11 5.214 11 9.416m-6.215 0a4.785 4.785 0 1 0-9.57 0 4.785 4.785 0 0 0 9.57 0"
    />
  </svg>
);
export default SvgEye;
