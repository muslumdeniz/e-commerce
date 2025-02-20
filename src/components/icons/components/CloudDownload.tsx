import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.475 15.36a3.225 3.225 0 0 1 0-6.45h.107a6 6 0 0 1-.107-1.075 5.375 5.375 0 0 1 10.019-2.666A3.23 3.23 0 0 1 16.3 4.61a3.225 3.225 0 0 1 3.225 3.225 3.1 3.1 0 0 1-.204 1.075h.204a3.225 3.225 0 0 1 0 6.45zm6.848 1.774H9.678a1.076 1.076 0 0 0-.731 1.752l2.333 2.322a1 1 0 0 0 1.44 0l2.333-2.322a1.074 1.074 0 0 0-.731-1.752z"
    />
  </svg>
);
export default SvgCloudDownload;
