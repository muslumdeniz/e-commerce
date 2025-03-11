import * as React from "react";
import type { SVGProps } from "react";
const SvgVue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m17.35 3.84-5 8.6a.54.54 0 0 1-1 0l-5-8.6zm5.16-.42a2.11 2.11 0 0 0-1.86-1.08H3.25a2.06 2.06 0 0 0-1.77 3.08l8.78 15.21a2 2 0 0 0 3.55 0l8.7-15.07a2.1 2.1 0 0 0 0-2.14m-1.3 1.39-8.7 15.07a.54.54 0 0 1-.95 0L2.78 4.67a.56.56 0 0 1 .47-.83h1.48l5.4 9.35a2 2 0 0 0 1.77 1 2 2 0 0 0 1.78-1l5.4-9.35h1.57a.63.63 0 0 1 .56.33.61.61 0 0 1 0 .64"
    />
  </svg>
);
export default SvgVue;
