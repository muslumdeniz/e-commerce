import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.729 7.607a6.443 6.443 0 0 0-6.444-6.347h-8.72A6.444 6.444 0 0 0 1.25 7.704v8.677a6.443 6.443 0 0 0 6.444 6.357h1.868v-7.517H7.575a.537.537 0 0 1-.537-.537v-2.126a.537.537 0 0 1 .537-.537h1.987V8.799a3.79 3.79 0 0 1 3.78-3.78h3.061a.537.537 0 0 1 .537.537v2.148a.537.537 0 0 1-.537.537H14.61a1.267 1.267 0 0 0-1.268 1.267v2.491h2.943a.537.537 0 0 1 .505.741l-.827 2.073a.54.54 0 0 1-.505.344H13.31v7.517h3.072a6.444 6.444 0 0 0 6.368-6.443z"
    />
  </svg>
);
export default SvgFacebook;
