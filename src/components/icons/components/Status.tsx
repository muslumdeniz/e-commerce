import * as React from "react";
import type { SVGProps } from "react";
const SvgStatus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.86 13.155h5.285a1.575 1.575 0 0 1 1.576 1.877 9.65 9.65 0 0 1-7.623 7.622 1.576 1.576 0 0 1-1.876-1.544v-5.317a2.637 2.637 0 0 1 2.638-2.638m-7.72 0H2.855a1.575 1.575 0 0 0-1.576 1.877 9.65 9.65 0 0 0 7.623 7.622 1.576 1.576 0 0 0 1.876-1.544v-5.317a2.637 2.637 0 0 0-2.638-2.638m12.716-1.222a1.695 1.695 0 0 0 1.65-2.015 10.721 10.721 0 0 0-21.013 0 1.694 1.694 0 0 0 1.651 2.015z"
    />
  </svg>
);
export default SvgStatus;
