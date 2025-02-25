import * as React from "react";
import type { SVGProps } from "react";
const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.164 17.74c.193.396.292.832.288 1.273A2.987 2.987 0 0 1 18.466 22H5.544a2.987 2.987 0 0 0 2.986-2.987 2.86 2.86 0 0 0-.288-1.274L2.846 6.35a2.86 2.86 0 0 1-.289-1.274 3 3 0 0 1 0-.438 2.21 2.21 0 0 1 4.33 0A2.6 2.6 0 0 0 9.527 6.57h6.322zM7.037 19.012H3.782a.996.996 0 0 0-.866 1.414.4.4 0 0 0 .05.08h2.578a1.493 1.493 0 0 0 1.493-1.494M4.837 2c1.374 0 3.176.607 3.584 2.28a1.135 1.135 0 0 0 1.105.796h11.07a.747.747 0 0 0 .697-.995 2.99 2.99 0 0 0-2.827-1.991z"
    />
  </svg>
);
export default SvgScroll;
