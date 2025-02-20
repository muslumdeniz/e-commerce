import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 .75A11.25 11.25 0 1 0 23.25 12 11.26 11.26 0 0 0 12 .75m6.467 18.43a7.17 7.17 0 0 0-12.934 0 9.68 9.68 0 1 1 12.934 0m-2.49-9.126a3.976 3.976 0 1 1-7.953 0 3.976 3.976 0 0 1 7.953 0"
    />
  </svg>
);
export default SvgProfileCircle;
