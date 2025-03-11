import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.75 12.43a1 1 0 0 0 0-.77 1.2 1.2 0 0 0-.22-.32L12.59 5.4a1 1 0 0 0-1.41 1.41L15.41 11H6a1 1 0 0 0 0 2h9.46l-4.23 4.23a1 1 0 0 0 1.41 1.42l5.94-5.94q.105-.129.17-.28"
    />
  </svg>
);
export default SvgArrowRight;
