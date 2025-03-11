import * as React from "react";
import type { SVGProps } from "react";
const SvgRowHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.25 11.25H3.75a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h16.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5m-16.5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm16.5 20H3.75a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h16.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5m-16.5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgRowHorizontal;
