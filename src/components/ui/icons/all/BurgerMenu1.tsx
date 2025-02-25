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
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m4.4 15.62H7.655a.825.825 0 1 1 0-1.65H16.4a.825.825 0 0 1 0 1.65M8.854 12a.825.825 0 0 1 .825-.825h4.642a.825.825 0 0 1 0 1.65H9.679A.825.825 0 0 1 8.854 12M16.4 9.03H7.655a.825.825 0 0 1 0-1.65H16.4a.825.825 0 0 1 0 1.65"
    />
  </svg>
);
export default SvgBurgerMenu1;
