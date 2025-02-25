import * as React from "react";
import type { SVGProps } from "react";
const SvgElectronicClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.015 19.875H4.97a2.25 2.25 0 0 1-2.25-2.25V6.375a2.25 2.25 0 0 1 2.25-2.25h11.045a2.25 2.25 0 0 1 2.25 2.25v11.25a2.25 2.25 0 0 1-2.25 2.25m-.37-18A1.395 1.395 0 0 0 14.271.75H6.714A1.395 1.395 0 0 0 5.34 1.875L5.161 3h10.663zM5.34 22.125a1.395 1.395 0 0 0 1.373 1.125h7.558a1.395 1.395 0 0 0 1.372-1.125l.18-1.125H5.161zm14.42-11.25h-.337v-4.5h.326a1.125 1.125 0 0 1 1.125.844 4.95 4.95 0 0 1 0 2.801 1.125 1.125 0 0 1-1.147.855z"
    />
  </svg>
);
export default SvgElectronicClock;
