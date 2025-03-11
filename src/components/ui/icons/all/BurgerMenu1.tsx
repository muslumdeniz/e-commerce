import * as React from "react";
import type { SVGProps } from "react";
const SvgBurgerMenu1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75M14.86 12a.75.75 0 0 0-.75-.75H9.89a.75.75 0 1 0 0 1.5h4.22a.75.75 0 0 0 .75-.75m1.84 3.45a.75.75 0 0 0-.7-.75H8.05a.75.75 0 1 0 0 1.5H16a.76.76 0 0 0 .7-.75m0-6.9a.76.76 0 0 0-.7-.75H8.05a.75.75 0 0 0 0 1.5H16a.75.75 0 0 0 .7-.75"
    />
  </svg>
);
export default SvgBurgerMenu1;
