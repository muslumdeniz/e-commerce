import * as React from "react";
import type { SVGProps } from "react";
const SvgEntranceLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.842 11.125v1.642H2.441a.82.82 0 1 1 0-1.642zm9.107-9.874H13.27a4.32 4.32 0 0 0-4.429 4.213v5.715h5.185l-1.76-1.836a.83.83 0 0 1 0-1.156.8.8 0 0 1 1.08 0l3.133 3.24a.81.81 0 0 1 0 1.146l-3.133 3.24a.8.8 0 0 1-.878.178.832.832 0 0 1-.256-1.334l1.76-1.782h-5.13v5.715a4.32 4.32 0 0 0 4.428 4.159h4.678a4.32 4.32 0 0 0 4.418-4.16V5.465a4.32 4.32 0 0 0-4.418-4.213"
    />
  </svg>
);
export default SvgEntranceLeft;
