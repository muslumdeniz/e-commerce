import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m22.192 9.56-.83-1.847-2.015-4.504a2 2 0 0 0-.2-.378 4 4 0 0 0-.272-.273q-.213-.24-.473-.43a2.65 2.65 0 0 0-1.26-.62q-.21-.015-.42 0H7.275a2.84 2.84 0 0 0-1.575.462 3 3 0 0 0-.577.588 5 5 0 0 0-.473.65L2.634 7.714l-.83 1.847a3.41 3.41 0 0 0 .557 3.675l7.454 8.283a2.92 2.92 0 0 0 4.367 0l7.454-8.283a3.41 3.41 0 0 0 .556-3.675"
    />
  </svg>
);
export default SvgDiamonds;
