import * as React from "react";
import type { SVGProps } from "react";
const SvgJoystick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.38 15.1h-3.77v-4.63a5 5 0 1 0-5.52 0v4.62h-.77a.75.75 0 0 0-.74-.68h-.76a.73.73 0 0 0-.73.68h-.47a3.1 3.1 0 0 0-3.09 3.1v1.4a3.09 3.09 0 0 0 3.09 3.09h12.76a3.09 3.09 0 0 0 3.09-3.09V18.2a3.1 3.1 0 0 0-3.09-3.1M9.09 8.43a3.44 3.44 0 0 1-.74-2.13 3.5 3.5 0 1 1 7 0 3.44 3.44 0 0 1-.74 2.13 3.47 3.47 0 0 1-5.52 0m4 2.69v4h-2.5v-4a4.5 4.5 0 0 0 2.52 0zM20 19.6a1.59 1.59 0 0 1-1.59 1.59H5.62A1.59 1.59 0 0 1 4 19.6v-1.4a1.6 1.6 0 0 1 1.59-1.6h12.79A1.6 1.6 0 0 1 20 18.2zM11 5.93a.91.91 0 1 1 .293-.071.9.9 0 0 1-.353.071z"
    />
  </svg>
);
export default SvgJoystick;
