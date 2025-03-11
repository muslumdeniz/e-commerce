import * as React from "react";
import type { SVGProps } from "react";
const SvgSize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.7 22.75H7.3a6.06 6.06 0 0 1-6-6.05v-4.4a6.06 6.06 0 0 1 6-6.05h4.4a6.06 6.06 0 0 1 6.05 6.05v4.4a6.06 6.06 0 0 1-6.05 6.05m-4.4-15a4.55 4.55 0 0 0-4.55 4.55v4.4a4.55 4.55 0 0 0 4.55 4.55h4.4a4.55 4.55 0 0 0 4.55-4.55v-4.4a4.55 4.55 0 0 0-4.55-4.55zm12.43 5.84a4.19 4.19 0 0 0 3-4V5.42a4.17 4.17 0 0 0-4.17-4.17h-4.14a4.17 4.17 0 0 0-4 3.12.754.754 0 0 0 1.46.38 2.66 2.66 0 0 1 2.58-2h4.16a2.68 2.68 0 0 1 2.67 2.67v4.16a2.7 2.7 0 0 1-1.94 2.57.75.75 0 0 0 .21 1.47z"
    />
  </svg>
);
export default SvgSize;
