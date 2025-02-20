import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.418 1.25H7.582A6.45 6.45 0 0 0 1.25 7.7v8.6a6.55 6.55 0 0 0 .763 3.075 6.32 6.32 0 0 0 5.569 3.375h8.836a6.32 6.32 0 0 0 5.569-3.386c.5-.944.762-1.996.763-3.064V7.7a6.45 6.45 0 0 0-6.332-6.45m4.72 12.9h-3.57a3.38 3.38 0 0 1-3.063-2.032l-.936-2.15a1.15 1.15 0 0 0-2.15.075l-2.15 6.128a1.15 1.15 0 0 1-2.15.118l-.343-.72a3.35 3.35 0 0 0-3.021-1.924h-.893V7.7a4.773 4.773 0 0 1 4.72-4.805h8.836a4.773 4.773 0 0 1 4.72 4.805z"
    />
  </svg>
);
export default SvgGraph3;
