import * as React from "react";
import type { SVGProps } from "react";
const SvgGooglePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.75 10.4-4.52-2.27L4.39 1.68l-.48-.24a1.81 1.81 0 0 0-2.62 1.62v17.88a1.81 1.81 0 0 0 2.62 1.62l17.84-8.92a1.81 1.81 0 0 0 0-3.24m-11 7-2.91 1.51 5.84-5.84L15.62 15zm2.92-6.4L7.83 5.09 15.62 9zM2.93 21.2a.3.3 0 0 1-.14-.26V3.06a.3.3 0 0 1 .14-.26.4.4 0 0 1 .17 0h.14l.37.2 9 9-9 9-.37.19a.32.32 0 0 1-.31.01m18.15-8.91-4 2L14.74 12 17 9.71l4 2a.29.29 0 0 1 .17.28.28.28 0 0 1-.09.3"
    />
  </svg>
);
export default SvgGooglePlay;
