import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75m-1 15.62a1.3 1.3 0 0 1-.43-.07 1.23 1.23 0 0 1-.81-1.15v-3.66H8.44a1.23 1.23 0 0 1-.92-2l4.65-5.4a1.24 1.24 0 0 1 2.17.82v3.72h1.25a1.23 1.23 0 0 1 .93 2L11.88 18a1.22 1.22 0 0 1-.88.37M9 12h2.16v4.42L15 12.09h-2.21V7.58z"
    />
  </svg>
);
export default SvgFlashCircle;
