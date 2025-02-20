import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2.3 18.339a5.3 5.3 0 0 1-.9-2.915V4.919a.87.87 0 0 1 1.473-.625l3.18 3.18a.86.86 0 0 0 1.209 0l4.134-3.975a.86.86 0 0 1 1.208 0l2.576 2.416zM21.128 4.294l-3.18 3.18a.86.86 0 0 1-1.209 0l-.498-.446L3.382 19.536a5.3 5.3 0 0 0 3.318 1.22h10.6a5.3 5.3 0 0 0 5.3-5.3V4.918a.87.87 0 0 0-1.474-.625"
    />
  </svg>
);
export default SvgCrown;
