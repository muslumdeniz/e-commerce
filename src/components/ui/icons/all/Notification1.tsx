import * as React from "react";
import type { SVGProps } from "react";
const SvgNotification1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.525 7.7a3.225 3.225 0 1 0 0-6.45 3.225 3.225 0 0 0 0 6.45"
    />
    <path
      fill={props.color}
      d="M19.525 9.313a4.85 4.85 0 0 1-4.837-4.838c.01-.749.194-1.484.537-2.15h-8.6A5.375 5.375 0 0 0 1.25 7.7v9.675a5.375 5.375 0 0 0 5.375 5.375H16.3a5.375 5.375 0 0 0 5.375-5.375v-8.6a4.85 4.85 0 0 1-2.15.537"
    />
  </svg>
);
export default SvgNotification1;
