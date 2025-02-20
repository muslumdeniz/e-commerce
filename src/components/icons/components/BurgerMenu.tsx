import * as React from "react";
import type { SVGProps } from "react";
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.354 1.25H7.7A6.45 6.45 0 0 0 1.25 7.7v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.7a6.45 6.45 0 0 0-6.396-6.45m.408 16.362h-6.16a.806.806 0 1 1 0-1.613h6.16a.806.806 0 1 1 0 1.612m.301-4.806H7.97a.806.806 0 0 1 0-1.612h9.094a.806.806 0 1 1 0 1.612m0-4.805h-3.622a.806.806 0 0 1 0-1.612h3.622a.806.806 0 1 1 0 1.612"
    />
  </svg>
);
export default SvgBurgerMenu;
