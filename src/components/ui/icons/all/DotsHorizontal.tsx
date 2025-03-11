import * as React from "react";
import type { SVGProps } from "react";
const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.12 13.28a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68M7.1 13.28a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68M17.13 13.28a1.34 1.34 0 1 0 0-2.68 1.34 1.34 0 0 0 0 2.68"
    />
  </svg>
);
export default SvgDotsHorizontal;
