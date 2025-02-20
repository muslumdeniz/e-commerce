import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationBing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.673 15.505-.851-1.252a10 10 0 0 1-1.678-5.735v-.263A7.026 7.026 0 0 0 9.35 1.818a6.75 6.75 0 0 0-4.17 6.336v.088a10.14 10.14 0 0 1-1.966 6.073l-.851 1.153a2.6 2.6 0 0 0-.514 1.577 2.655 2.655 0 0 0 2.617 2.605h15.027a2.655 2.655 0 0 0 2.655-2.655v-.075c-.018-.508-.183-1-.476-1.415m-8.766-5.009a.94.94 0 0 1-1.878 0V6.514a.94.94 0 0 1 1.878 0zM9.564 20.903a2.504 2.504 0 0 0 4.834 0z"
    />
  </svg>
);
export default SvgNotificationBing;
