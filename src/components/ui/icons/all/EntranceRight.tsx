import * as React from "react";
import type { SVGProps } from "react";
const SvgEntranceRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.937 12.83h5.29v5.756a4.336 4.336 0 0 1-4.401 4.163H6.142a4.336 4.336 0 0 1-4.412-4.184V5.402a4.337 4.337 0 0 1 4.412-4.152h4.684a4.337 4.337 0 0 1 4.402 4.152v5.757H9.937l1.724-1.767a.835.835 0 0 0 0-1.16.79.79 0 0 0-1.084 0l-3.134 3.252a.835.835 0 0 0 0 1.16l3.134 3.144a.78.78 0 0 0 .563.239.8.8 0 0 0 .575-.239.835.835 0 0 0 0-1.16zm11.603-1.638h-6.312v1.637h6.312a.824.824 0 0 0 0-1.637"
    />
  </svg>
);
export default SvgEntranceRight;
