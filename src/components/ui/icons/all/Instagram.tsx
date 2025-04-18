import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.71 22.71H8.22a7 7 0 0 1-7-7V8.25a7 7 0 0 1 7-7h7.49a7 7 0 0 1 7 7v7.46a7 7 0 0 1-7 7M8.22 2.79a5.48 5.48 0 0 0-5.47 5.46v7.46a5.5 5.5 0 0 0 5.47 5.5h7.49a5.52 5.52 0 0 0 5.54-5.5V8.25a5.5 5.5 0 0 0-5.54-5.46zm9.63 2.33a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 16.32A4.35 4.35 0 1 1 16.33 12 4.36 4.36 0 0 1 12 16.32m0-7.19A2.85 2.85 0 1 0 14.83 12 2.87 2.87 0 0 0 12 9.13"
    />
  </svg>
);
export default SvgInstagram;
