import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.11 12.23h-.06L11.6 11a1.43 1.43 0 0 0-.93-.34 1.5 1.5 0 0 0-1.07.46L7.36 13.5a.71.71 0 0 0 0 1 .67.67 0 0 0 .49.21.72.72 0 0 0 .5-.22l2.24-2.33a.1.1 0 0 1 .07 0h.06l1.44 1.17c.265.217.598.334.94.33a1.5 1.5 0 0 0 1.1-.48l2.45-2.68a.72.72 0 0 0 0-1 .7.7 0 0 0-.48-.2.7.7 0 0 0-.51.23l-2.48 2.67a.1.1 0 0 1-.07 0"
    />
    <path
      fill={props.color}
      d="M16.18 2.75a5.07 5.07 0 0 1 5.07 5.07v8.36a5.07 5.07 0 0 1-5.07 5.07H7.82a5.07 5.07 0 0 1-5.07-5.07V7.82a5.07 5.07 0 0 1 5.07-5.07zm0-1.5H7.82a6.57 6.57 0 0 0-6.57 6.57v8.36a6.57 6.57 0 0 0 6.57 6.57h8.36a6.57 6.57 0 0 0 6.57-6.57V7.82a6.57 6.57 0 0 0-6.57-6.57"
    />
  </svg>
);
export default SvgChartLine;
