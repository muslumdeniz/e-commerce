import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.418 1.25H7.582A6.45 6.45 0 0 0 1.25 7.7v8.6a6.45 6.45 0 0 0 6.332 6.45h8.836a6.45 6.45 0 0 0 6.332-6.45V7.7a6.45 6.45 0 0 0-6.332-6.45M6.743 13.957a.806.806 0 0 1-1.612 0v-3.914a.806.806 0 1 1 1.612 0zm6.031 2.848a.806.806 0 1 1-1.612 0v-9.61a.806.806 0 1 1 1.612 0zm5.956-2.848a.806.806 0 1 1-1.613 0v-3.914a.806.806 0 1 1 1.613 0z"
    />
  </svg>
);
export default SvgGraph;
