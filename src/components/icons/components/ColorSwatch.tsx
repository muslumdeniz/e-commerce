import * as React from "react";
import type { SVGProps } from "react";
const SvgColorSwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.5 16.337v3.927a2.236 2.236 0 0 1-2.236 2.236H9.638l.146-.116L18.07 14.1h2.195a2.236 2.236 0 0 1 2.236 2.237M18.972 7.8 16.2 5.028a2.237 2.237 0 0 0-3.15 0l-1.575 1.554v11.896l7.497-7.528a2.236 2.236 0 0 0 0-3.15M3.736 1.5h3.927A2.236 2.236 0 0 1 9.9 3.737V18.3a4.2 4.2 0 1 1-8.4 0V3.736A2.236 2.236 0 0 1 3.737 1.5M5.7 19.875A1.575 1.575 0 1 0 4.125 18.3 1.586 1.586 0 0 0 5.7 19.875"
    />
  </svg>
);
export default SvgColorSwatch;
