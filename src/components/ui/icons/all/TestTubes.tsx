import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTubes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10 1.25H4a1.75 1.75 0 0 0-.75 3.33V19a3.75 3.75 0 0 0 7.5 0V4.58A1.75 1.75 0 0 0 10 1.25m-6 1.5h6a.25.25 0 0 1 0 .5.76.76 0 0 0-.75.75v4.25h-4.5V4A.76.76 0 0 0 4 3.25a.25.25 0 0 1 0-.5M9.25 19a2.25 2.25 0 0 1-4.5 0V9.75h4.5zM20 1.25h-6a1.75 1.75 0 0 0-.75 3.33V19a3.75 3.75 0 1 0 7.5 0V4.58A1.75 1.75 0 0 0 20 1.25m-6 1.5h6a.25.25 0 1 1 0 .5.76.76 0 0 0-.75.75v9.25h-4.5V4a.76.76 0 0 0-.75-.75.25.25 0 1 1 0-.5M19.25 19a2.25 2.25 0 1 1-4.5 0v-4.25h4.5z"
    />
  </svg>
);
export default SvgTestTubes;
