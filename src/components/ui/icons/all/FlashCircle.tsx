import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m4.312 11.143-5.06 5.863a.54.54 0 0 1-.935-.352v-4.84h-2.2a.528.528 0 0 1-.396-.869l5.126-5.94a.54.54 0 0 1 .935.352v4.928h2.2a.54.54 0 0 1 .33.858"
    />
  </svg>
);
export default SvgFlashCircle;
