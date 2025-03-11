import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M19 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
    <path
      fill={props.color}
      d="M16 22.75H7A5.8 5.8 0 0 1 1.25 17V8A5.8 5.8 0 0 1 7 2.25h6.62a.75.75 0 1 1 0 1.5H7A4.3 4.3 0 0 0 2.75 8v9A4.3 4.3 0 0 0 7 21.25h9A4.3 4.3 0 0 0 20.25 17v-6.73a.75.75 0 1 1 1.5 0V17A5.8 5.8 0 0 1 16 22.75"
    />
  </svg>
);
export default SvgNotification1;
