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
      d="M19.046 16.27h-5.824v-6.088a4.696 4.696 0 1 0-2.784 0v6.088H7.94v-.751a.83.83 0 0 0-.817-.829h-.851a.83.83 0 0 0-.818.829v.751h-.497a2.597 2.597 0 0 0-2.597 2.597v1.547A2.597 2.597 0 0 0 4.957 23h14.089a2.597 2.597 0 0 0 2.597-2.586v-1.547a2.597 2.597 0 0 0-2.597-2.597M9.852 4.28a1.005 1.005 0 1 1 2.01 0 1.005 1.005 0 0 1-2.01 0"
    />
  </svg>
);
export default SvgJoystick;
