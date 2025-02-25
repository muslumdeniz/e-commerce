import * as React from "react";
import type { SVGProps } from "react";
const SvgScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.364 1.23H5.636A4.386 4.386 0 0 0 1.25 5.616v8.073a4.387 4.387 0 0 0 4.386 4.386h5.096v3.085H7.345a.806.806 0 1 0 0 1.613h9.31a.806.806 0 0 0 0-1.613h-3.387v-3.085h5.096a4.386 4.386 0 0 0 4.386-4.386V5.616a4.386 4.386 0 0 0-4.386-4.386"
    />
  </svg>
);
export default SvgScreen;
