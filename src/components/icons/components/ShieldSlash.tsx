import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.18 3.2 2.96 22.334a.82.82 0 0 1-.585.242.8.8 0 0 1-.583-.242.826.826 0 0 1 0-1.168l2.974-2.974-.199-.165a3.73 3.73 0 0 1-1.376-2.897V7.045a3.73 3.73 0 0 1 2.203-3.393l5.045-2.313a3.76 3.76 0 0 1 3.117 0l5.056 2.313q.258.117.496.275l1.916-1.905A.827.827 0 1 1 22.181 3.2M7.245 20.22l2.38 1.938a3.734 3.734 0 0 0 4.725 0l5.056-4.13a3.73 3.73 0 0 0 1.344-2.897V7.045a2 2 0 0 0 0-.276z"
    />
  </svg>
);
export default SvgShieldSlash;
