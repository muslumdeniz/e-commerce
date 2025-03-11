import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.75 11.72a.75.75 0 0 1-1.5 0V8.8a.75.75 0 1 1 1.5 0zm0-7.45V2.84a.75.75 0 1 0-1.5 0v1.43a6.47 6.47 0 0 0-6 6.45v5.48a6.47 6.47 0 0 0 6.47 6.46h.56a6.47 6.47 0 0 0 6.47-6.46v-5.48a6.47 6.47 0 0 0-6-6.45m4.5 11.93a5 5 0 0 1-5 5h-.56a5 5 0 0 1-5-5v-5.48a5 5 0 0 1 5-5h.56a5 5 0 0 1 5 5z"
    />
  </svg>
);
export default SvgMouse1;
