import * as React from "react";
import type { SVGProps } from "react";
const SvgCelsiusCel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.75.75a11 11 0 1 0 0 22 11 11 0 0 0 0-22m4.917 15.213a6.732 6.732 0 1 1-5.258-10.945 6.6 6.6 0 0 1 3.685 1.1.825.825 0 0 1 .242 1.1.825.825 0 0 1-1.1.231 5.082 5.082 0 1 0 1.188 7.436.825.825 0 0 1 1.155-.121.834.834 0 0 1 .088 1.199m.869-4.939a1.287 1.287 0 1 1 0-2.574 1.287 1.287 0 0 1 0 2.574"
    />
  </svg>
);
export default SvgCelsiusCel;
