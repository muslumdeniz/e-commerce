import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackRightLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2.26 12a.79.79 0 0 1 .781-.781h9.542V7.833a.593.593 0 0 1 1.042-.427l5.208 4.167a.594.594 0 0 1 0 .833l-5.208 4.167a.594.594 0 0 1-1.042-.406v-3.365H3.041a.79.79 0 0 1-.78-.802m18.698 8.5a.78.78 0 0 0 .781-.781V4.28a.781.781 0 1 0-1.562 0V19.72a.77.77 0 0 0 .78.78"
    />
  </svg>
);
export default SvgBlackRightLine;
