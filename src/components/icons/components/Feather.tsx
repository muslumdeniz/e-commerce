import * as React from "react";
import type { SVGProps } from "react";
const SvgFeather = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m20.585 11.028-7.613-7.613L14.53 1.87a2.095 2.095 0 0 1 2.972 0l4.63 4.65a2.096 2.096 0 0 1 0 2.973zM19.41 12.19 11.81 4.589l-.164-.165a7.4 7.4 0 0 1-1.997.812 7.5 7.5 0 0 0-5.726 7.46 6.5 6.5 0 0 1-1.897 4.716l-.472.472a1.097 1.097 0 0 0 0 1.514l.757.756.164-.153 6.472-6.472a2.687 2.687 0 1 1 1.525 1.525L4.065 21.46l-.23.22.767.767a1.097 1.097 0 0 0 1.514 0l.472-.472a6.5 6.5 0 0 1 4.717-1.897 7.5 7.5 0 0 0 7.459-5.726 7.4 7.4 0 0 1 .812-1.997z"
    />
  </svg>
);
export default SvgFeather;
