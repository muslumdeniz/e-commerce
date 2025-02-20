import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.15 20.603a2.146 2.146 0 1 1-4.293 0 2.146 2.146 0 0 1 4.293 0M8.332 14.99l.934 1.427a4.95 4.95 0 0 1 5.474 0l.934-1.427a1.073 1.073 0 0 0-.43-1.557 7.88 7.88 0 0 0-6.44 0 1.074 1.074 0 0 0-.472 1.557M2.053 5.33l.955 1.47a16.41 16.41 0 0 1 17.99 0l.955-1.47a1.07 1.07 0 0 0-.386-1.536 19.25 19.25 0 0 0-19.128 0 1.073 1.073 0 0 0-.386 1.568zm3.134 4.808.956 1.449a10.73 10.73 0 0 1 11.72 0l.956-1.449a1.07 1.07 0 0 0-.376-1.513 13.53 13.53 0 0 0-12.88 0 1.073 1.073 0 0 0-.376 1.545z"
    />
  </svg>
);
export default SvgWifi;
