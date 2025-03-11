import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.9 18.45a.74.74 0 0 1-.22.56l-2.82 2.79a.69.69 0 0 1-1 0l-2.58-2.73a.77.77 0 0 1 0-1.06.67.67 0 0 1 1 0l1.37 1.44V2.77a.73.73 0 0 1 .7-.75.74.74 0 0 1 .72.74v16.78l1.63-1.62a.68.68 0 0 1 1 0 .73.73 0 0 1 .2.53M7.88 2.22a.68.68 0 0 0-.777-.161.7.7 0 0 0-.233.161l-2.7 2.83a.75.75 0 0 0 0 1 .7.7 0 0 0 .774.154.7.7 0 0 0 .226-.164L6.59 4.6v16.67a.71.71 0 1 0 1.42 0V4.45l1.42 1.49a.7.7 0 0 0 1 0 .76.76 0 0 0 0-1z"
    />
  </svg>
);
export default SvgArrowUpDown;
