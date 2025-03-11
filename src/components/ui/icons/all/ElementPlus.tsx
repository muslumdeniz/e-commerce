import * as React from "react";
import type { SVGProps } from "react";
const SvgElementPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.22 1.25h-5a2.52 2.52 0 0 0-2.47 2.52v5a2.52 2.52 0 0 0 2.52 2.52h5a2.52 2.52 0 0 0 2.52-2.52v-5a2.52 2.52 0 0 0-2.57-2.52m1 7.48a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm10.51-7.48h-5a2.52 2.52 0 0 0-2.51 2.52v5a2.52 2.52 0 0 0 2.51 2.52h5a2.52 2.52 0 0 0 2.52-2.52v-5a2.52 2.52 0 0 0-2.52-2.52m1 7.48a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm-12.53 4h-5a2.52 2.52 0 0 0-2.52 2.52v5a2.52 2.52 0 0 0 2.52 2.52h5a2.52 2.52 0 0 0 2.52-2.52v-5a2.52 2.52 0 0 0-2.5-2.5zm1 7.48a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zm11.87-2.48a.75.75 0 0 1-.75.75H19v2.36a.75.75 0 1 1-1.5 0V18.5h-2.36a.75.75 0 1 1 0-1.5h2.36v-2.36a.75.75 0 1 1 1.5 0V17h2.36a.75.75 0 0 1 .75.75z"
    />
  </svg>
);
export default SvgElementPlus;
