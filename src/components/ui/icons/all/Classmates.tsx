import * as React from "react";
import type { SVGProps } from "react";
const SvgClassmates = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 8.39a.88.88 0 1 1-.88.88.87.87 0 0 1 .88-.88m0-1.5a2.38 2.38 0 1 0 0 4.76 2.38 2.38 0 0 0 0-4.76m1.37 7.47q.51-.134 1-.33a.75.75 0 0 0 .38-1 .74.74 0 0 0-1-.38 3.86 3.86 0 0 1-3.42 0 .76.76 0 0 0-1 .27.75.75 0 0 0 .26 1 4 4 0 0 0 1 .4l-1.23 1.57a.75.75 0 0 0 1.17.94L12 15l1.47 1.83a.77.77 0 0 0 .58.28.68.68 0 0 0 .47-.17.74.74 0 0 0 .12-1.05zM12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75"
    />
  </svg>
);
export default SvgClassmates;
