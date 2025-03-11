import * as React from "react";
import type { SVGProps } from "react";
const SvgCelsiusCel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.69 18.62a6.12 6.12 0 0 1 0-12.24 6 6 0 0 1 3.35 1 .75.75 0 0 1 .22 1 .75.75 0 0 1-1 .21 4.62 4.62 0 1 0 1.08 6.76.75.75 0 0 1 1.05-.11.76.76 0 0 1 .12 1 6.09 6.09 0 0 1-4.82 2.38m5.57-9.12a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34M12 23.25A10.75 10.75 0 1 1 22.75 12.5 10.76 10.76 0 0 1 12 23.25m0-20a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 3.25"
    />
  </svg>
);
export default SvgCelsiusCel;
