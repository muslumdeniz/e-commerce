import * as React from "react";
import type { SVGProps } from "react";
const SvgDj = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.016.5a1.61 1.61 0 0 0-1.61 1.61v4.138H8.958a5.668 5.668 0 0 0 0 11.335h4.058a1.61 1.61 0 0 0 1.61-1.61V2.11A1.61 1.61 0 0 0 13.015.5M6.509 11.87A2.45 2.45 0 0 1 8.958 9.42h2.448v4.874H8.958a2.45 2.45 0 0 1-2.45-2.425m9.197 11.622a1.61 1.61 0 0 1-1.518-1.092 1.59 1.59 0 0 1 1-2.035 3.25 3.25 0 0 0 2.3-3.08V6.937a1.61 1.61 0 0 1 3.219 0v10.346a6.48 6.48 0 0 1-4.438 6.14c-.191.066-.396.09-.598.068zM20.649 2.11A1.597 1.597 0 1 1 19.017.5a1.6 1.6 0 0 1 1.598 1.61z"
    />
  </svg>
);
export default SvgDj;
