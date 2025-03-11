import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.81 1.25H7.19a5.94 5.94 0 0 0-5.94 5.94v9.62a5.94 5.94 0 0 0 5.94 5.94h9.62a5.94 5.94 0 0 0 5.94-5.94V7.19a5.94 5.94 0 0 0-5.94-5.94m-9.62 20a4.44 4.44 0 0 1-4.44-4.44V7.19a4.44 4.44 0 0 1 4.44-4.44h1.06v18.5zm14.06-4.44a4.44 4.44 0 0 1-4.44 4.44H9.75V2.75h7.06a4.44 4.44 0 0 1 4.44 4.44z"
    />
  </svg>
);
export default SvgGrid;
