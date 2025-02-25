import * as React from "react";
import type { SVGProps } from "react";
const SvgVibeVibe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.75.75a11 11 0 1 0 0 22 11 11 0 0 0 0-22M9.066 6.437H14.5a.583.583 0 0 1 .462.935L12.3 10.936a.585.585 0 0 1-.924 0L8.615 7.35a.572.572 0 0 1 .451-.913m8.8 2.871-5.39 7.414a.8.8 0 0 1-.671.341.84.84 0 0 1-.66-.341l-5.5-7.414a.825.825 0 1 1 1.32-.979l4.785 6.512 4.752-6.501a.828.828 0 0 1 1.342.968z"
    />
  </svg>
);
export default SvgVibeVibe;
