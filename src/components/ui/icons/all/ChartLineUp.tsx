import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 22a.82.82 0 0 1-.82.82H7.64a6.4 6.4 0 0 1-6.39-6.39V2.07a.82.82 0 0 1 .82-.82.82.82 0 0 1 .81.82v14.34a4.76 4.76 0 0 0 4.76 4.75h14.29a.82.82 0 0 1 .82.84M6.49 16.82a.85.85 0 0 0 .63-.29L11 11.94a1.3 1.3 0 0 1 1.84-.15l1.11.94a2.94 2.94 0 0 0 4.07-.27l4.49-4.94a.82.82 0 0 0-1.21-1.1l-4.49 4.94a1.31 1.31 0 0 1-1.81.12l-1.11-.94a2.94 2.94 0 0 0-4.13.34l-3.89 4.59A.82.82 0 0 0 6 16.62a.85.85 0 0 0 .49.2"
    />
  </svg>
);
export default SvgChartLineUp;
