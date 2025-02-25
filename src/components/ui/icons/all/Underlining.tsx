import * as React from "react";
import type { SVGProps } from "react";
const SvgUnderlining = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.504 1.25H7.496A6.246 6.246 0 0 0 1.25 7.496v9.008a6.246 6.246 0 0 0 6.246 6.246h9.008a6.246 6.246 0 0 0 6.246-6.246V7.496a6.246 6.246 0 0 0-6.246-6.246M7.313 15.838a.8.8 0 0 1-.677.365.8.8 0 0 1-.441-.14.806.806 0 0 1-.226-1.074l2.71-4.064-2.71-4.203a.806.806 0 0 1 .237-1.075.817.817 0 0 1 1.075.247l2.999 4.644a.82.82 0 0 1 0 .892zm10.062 2.687h-6.342a.806.806 0 0 1 0-1.612h6.342a.806.806 0 1 1 0 1.612"
    />
  </svg>
);
export default SvgUnderlining;
