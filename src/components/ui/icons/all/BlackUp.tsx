import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.29 5.18a.57.57 0 0 0-.8 0l-3.95 4a.56.56 0 0 0 .4 1h3.21v8.11a.75.75 0 1 0 1.5 0V10.1h3.21a.56.56 0 0 0 .39-1z"
    />
  </svg>
);
export default SvgBlackUp;
