import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 2.65a9.35 9.35 0 1 1 0 18.7 9.35 9.35 0 0 1 0-18.7M7.33 12.93h3.74v3.74a.93.93 0 1 0 1.86 0v-3.74h3.74a.93.93 0 1 0 0-1.86h-3.74V7.33a.93.93 0 0 0-1.86 0v3.74H7.33a.93.93 0 0 0 0 1.86M12 1.25A10.75 10.75 0 1 0 22.75 12 10.76 10.76 0 0 0 12 1.25"
    />
  </svg>
);
export default SvgPlusCircle;
