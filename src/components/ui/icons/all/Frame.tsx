import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.491 16.4h6.259v4.4H5.191A1.99 1.99 0 0 1 3.2 18.809V7.6h-.209A1.99 1.99 0 0 1 1 5.609v-.418A1.99 1.99 0 0 1 2.991 3.2H3.2v-.209A1.99 1.99 0 0 1 5.191 1h.418A1.99 1.99 0 0 1 7.6 2.991v12.518a.89.89 0 0 0 .891.891m12.518 0H20.8V5.191A1.99 1.99 0 0 0 18.809 3.2H9.25v4.4h6.259a.89.89 0 0 1 .891.891v12.518A1.99 1.99 0 0 0 18.391 23h.418a1.99 1.99 0 0 0 1.991-1.991V20.8h.209A1.99 1.99 0 0 0 23 18.809v-.418a1.99 1.99 0 0 0-1.991-1.991"
    />
  </svg>
);
export default SvgFrame;
