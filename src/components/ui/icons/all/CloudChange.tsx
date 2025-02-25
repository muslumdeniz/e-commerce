import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudChange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.062 21.36H5.395a1.089 1.089 0 0 1-.741-1.767l2.365-2.365a1.09 1.09 0 0 1 1.471 0l2.355 2.365a1.09 1.09 0 0 1-.73 1.766zm8.502-4.437h-1.678a1.09 1.09 0 0 0-.73 1.777l2.354 2.354a1.025 1.025 0 0 0 1.471 0l2.366-2.354a1.09 1.09 0 0 0-.742-1.777zm4.066-1.254a3.27 3.27 0 1 0 0-6.54h-.207a3.2 3.2 0 0 0 .207-1.09 3.27 3.27 0 0 0-3.27-3.27 3.27 3.27 0 0 0-1.831.567A5.45 5.45 0 0 0 4.37 8.04q.005.55.11 1.09h-.11a3.27 3.27 0 1 0 0 6.54z"
    />
  </svg>
);
export default SvgCloudChange;
