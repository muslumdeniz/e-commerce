import * as React from "react";
import type { SVGProps } from "react";
const SvgCube2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.18 23.117a4.5 4.5 0 0 1-1.467-.525l-5.735-3.284a4.58 4.58 0 0 1-2.288-3.951V8.68c.004-.476.082-.949.23-1.401l8.636 4.849a1.21 1.21 0 0 1 .624 1.094zm.219-12.39a1.19 1.19 0 0 0 1.193 0l8.647-4.948a4.6 4.6 0 0 0-1.215-1.029L14.29 1.466a4.55 4.55 0 0 0-4.576 0L3.978 4.75c-.491.283-.925.654-1.281 1.095zm2.036 1.4a1.21 1.21 0 0 0-.613 1.095v9.928a4.5 4.5 0 0 0 1.467-.525l5.735-3.284a4.58 4.58 0 0 0 2.288-3.952V8.68a4.5 4.5 0 0 0-.263-1.488z"
    />
  </svg>
);
export default SvgCube2;
