import * as React from "react";
import type { SVGProps } from "react";
const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.718 10.32h-5.055a3.605 3.605 0 0 1-3.53-3.658V1.33zm0 1.632h-5.055a5.26 5.26 0 0 1-5.13-5.332V1.33H7.276a6.06 6.06 0 0 0-6.026 6.1v9.129a6.06 6.06 0 0 0 6.026 6.1h9.448a6.057 6.057 0 0 0 6.026-6.1v-4.565z"
    />
  </svg>
);
export default SvgFiles;
