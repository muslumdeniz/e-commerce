import * as React from "react";
import type { SVGProps } from "react";
const SvgDeliveryDoor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.75 19.7h-3.3A2.7 2.7 0 0 1 5.76 17V4a2.7 2.7 0 0 1 2.69-2.7H15A2.7 2.7 0 0 1 17.73 4v8.64a.75.75 0 0 1-1.5 0V4A1.19 1.19 0 0 0 15 2.75H8.45A1.19 1.19 0 0 0 7.26 4v13a1.19 1.19 0 0 0 1.19 1.2h3.3a.75.75 0 0 1 0 1.5m4-8.71V9.18a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0zm6 10v-4.68a1.79 1.79 0 0 0-1.79-1.8h-4.67a1.8 1.8 0 0 0-1.8 1.8V21a1.81 1.81 0 0 0 1.8 1.8h4.65a1.8 1.8 0 0 0 1.79-1.8zM19.94 16a.29.29 0 0 1 .27.186.3.3 0 0 1 .02.114V21a.29.29 0 0 1-.29.3h-4.65A.3.3 0 0 1 15 21v-4.69a.3.3 0 0 1 .3-.3zm-7.29 6a.76.76 0 0 0-.75-.75H3.76a.75.75 0 1 0 0 1.5h8.14a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgDeliveryDoor;
