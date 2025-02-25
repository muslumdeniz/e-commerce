import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m15.348 13.1 6.39 2.012a1.674 1.674 0 0 1 .098 3.195l-1.816.656a1.65 1.65 0 0 0-.996 1.007l-.69 1.881a1.685 1.685 0 0 1-3.194 0l-1.99-6.564a1.75 1.75 0 0 1 2.198-2.188m-3.774 2.658a3.36 3.36 0 0 1 .514-3.009 3.42 3.42 0 0 1 2.724-1.378c.35 0 .697.055 1.029.164l5.809 1.827q.192-.975.186-1.97a10.393 10.393 0 1 0-8.49 10.218z"
    />
  </svg>
);
export default SvgMouseCircle;
