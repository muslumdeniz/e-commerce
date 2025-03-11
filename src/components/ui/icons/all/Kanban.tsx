import * as React from "react";
import type { SVGProps } from "react";
const SvgKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.75 22.75h-5a2.5 2.5 0 0 1-2.5-2.5V3.75a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v16.5a2.5 2.5 0 0 1-2.5 2.5m-5-20a1 1 0 0 0-1 1v16.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3.75a1 1 0 0 0-1-1zm16.5 13h-5a2.5 2.5 0 0 1-2.5-2.5v-9.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v9.5a2.5 2.5 0 0 1-2.5 2.5m-5-13a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgKanban;
