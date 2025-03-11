import * as React from "react";
import type { SVGProps } from "react";
const SvgToggleOffCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.81 20.94h-3.62a8.94 8.94 0 1 1 0-17.88h3.62a8.94 8.94 0 1 1 0 17.88M10.19 4.56a7.44 7.44 0 1 0 0 14.88h3.62a7.44 7.44 0 0 0 0-14.88zm0 12.56A5.17 5.17 0 1 1 15.31 12a5.18 5.18 0 0 1-5.17 5.12zm0-8.84a3.67 3.67 0 1 0 1.366.284 3.7 3.7 0 0 0-1.416-.284z"
    />
  </svg>
);
export default SvgToggleOffCircle;
