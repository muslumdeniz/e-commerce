import * as React from "react";
import type { SVGProps } from "react";
const SvgFatrows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.25 22.75H3.75a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h16.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5m-16.5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm9.5-3h-9.5a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h9.5a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5m-9.5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h9.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgFatrows;
