import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.7 22.75H8.3a3.53 3.53 0 0 1-3.52-3.52V4.77A3.53 3.53 0 0 1 8.3 1.25h7.4a3.53 3.53 0 0 1 3.52 3.52v14.46a3.53 3.53 0 0 1-3.52 3.52m-7.4-20a2 2 0 0 0-2 2v14.48a2 2 0 0 0 2 2h7.4a2 2 0 0 0 2-2V4.77a2 2 0 0 0-2-2zM9 4.41a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24"
    />
  </svg>
);
export default SvgPhone;
