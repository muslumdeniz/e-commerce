import * as React from "react";
import type { SVGProps } from "react";
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.31 22.75H5.68a4.44 4.44 0 0 1-4.43-4.43v-6.63a4.44 4.44 0 0 1 4.43-4.44h6.63a4.44 4.44 0 0 1 4.44 4.44v6.63a4.44 4.44 0 0 1-4.44 4.43m-6.63-14a2.94 2.94 0 0 0-2.93 2.94v6.63a2.93 2.93 0 0 0 2.93 2.93h6.63a2.94 2.94 0 0 0 2.94-2.93v-6.63a2.94 2.94 0 0 0-2.94-2.94zm13.87 7.82a4.44 4.44 0 0 0 3.2-4.26V5.68a4.44 4.44 0 0 0-4.43-4.43h-6.63a4.42 4.42 0 0 0-4.21 3 .75.75 0 1 0 1.42.47 2.93 2.93 0 0 1 2.79-2h6.63a2.93 2.93 0 0 1 2.93 2.93v6.63a3 3 0 0 1-2.12 2.82.75.75 0 1 0 .42 1.44z"
    />
  </svg>
);
export default SvgCopy;
