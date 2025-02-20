import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 23.75c5.813 0 10.526-4.713 10.526-10.526C22.526 7.41 17.813 2.698 12 2.698S1.474 7.41 1.474 13.224C1.474 19.037 6.187 23.75 12 23.75m1.117-11.445v-4.84a.84.84 0 0 0-.255-.601.884.884 0 0 0-1.233 0 .84.84 0 0 0-.255.6v4.841a.84.84 0 0 0 .255.601.884.884 0 0 0 1.233 0 .84.84 0 0 0 .255-.6"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      d="M16.548.816a.8.8 0 0 1 .052.34v-.022a.84.84 0 0 1-.267.58.88.88 0 0 1-.605.236H8.75a.88.88 0 0 1-.617-.249.84.84 0 0 1-.255-.6.84.84 0 0 1 .255-.602A.88.88 0 0 1 8.75.25h6.978a.9.9 0 0 1 .634.272.9.9 0 0 1 .186.294"
    />
  </svg>
);
export default SvgTimer;
