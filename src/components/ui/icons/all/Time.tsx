import * as React from "react";
import type { SVGProps } from "react";
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5m0 20A9.27 9.27 0 1 1 21.27 12 9.28 9.28 0 0 1 12 21.27zM17 12a.74.74 0 0 1-.74.74H12a.74.74 0 0 1-.74-.74V5.92a.74.74 0 0 1 1.48 0v5.34h3.55A.74.74 0 0 1 17 12"
    />
  </svg>
);
export default SvgTime;
