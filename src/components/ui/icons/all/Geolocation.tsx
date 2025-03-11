import * as React from "react";
import type { SVGProps } from "react";
const SvgGeolocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.19 3.61a9.22 9.22 0 0 0-7.27-2.3 9.3 9.3 0 0 0-5.85 15.43l4.35 4.85a3.448 3.448 0 0 0 5.16 0l4.35-4.85a9.31 9.31 0 0 0-.74-13.13M12 21.25a2 2 0 0 1-1.47-.66l-4.34-4.85a7.79 7.79 0 0 1 4.9-12.94h.93a7.72 7.72 0 0 1 5.17 2 7.8 7.8 0 0 1 .62 11l-4.34 4.85a2 2 0 0 1-1.47.6m0-14.66a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 13a2.46 2.46 0 1 1-.02-4.92A2.46 2.46 0 0 1 12 13"
    />
  </svg>
);
export default SvgGeolocation;
