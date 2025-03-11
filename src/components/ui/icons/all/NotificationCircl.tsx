import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCircl = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M19 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
    <path
      fill={props.color}
      d="M12 22.75a10.75 10.75 0 1 1 2-21.31.74.74 0 0 1 .6.87.76.76 0 0 1-.88.6A9 9 0 0 0 12 2.75a9.25 9.25 0 1 0 9.11 7.66.75.75 0 1 1 1.47-.27q.168.922.17 1.86A10.76 10.76 0 0 1 12 22.75"
    />
  </svg>
);
export default SvgNotificationCircl;
