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
      d="M12 .75a11.25 11.25 0 1 0 0 22.5 11.25 11.25 0 0 0 0-22.5m0 5.501A2.677 2.677 0 1 1 9.356 8.93 2.69 2.69 0 0 1 12 6.25m2.936 10.125a.834.834 0 0 1-.135 1.181.77.77 0 0 1-.528.192.87.87 0 0 1-.653-.315L12 15.375l-1.654 2.059a.844.844 0 1 1-1.316-1.058l1.373-1.699a4.4 4.4 0 0 1-1.126-.45.844.844 0 0 1-.292-1.125.855.855 0 0 1 1.125-.303 4.34 4.34 0 0 0 3.848 0 .83.83 0 0 1 1.124.427.844.844 0 0 1-.427 1.125 10 10 0 0 1-1.125.371z"
    />
  </svg>
);
export default SvgClassmates;
