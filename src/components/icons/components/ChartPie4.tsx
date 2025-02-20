import * as React from "react";
import type { SVGProps } from "react";
const SvgChartPie4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.116 8.24V2.353a1.078 1.078 0 0 1 1.251-1.078 9.706 9.706 0 0 1 8.37 8.369 1.078 1.078 0 0 1-1.08 1.25h-5.92a2.62 2.62 0 0 1-2.62-2.652m-2.156 3.473V5.092a1.62 1.62 0 0 0-1.942-1.586 9.706 9.706 0 0 0-7.765 9.771 9.836 9.836 0 0 0 9.998 9.447 9.7 9.7 0 0 0 4.475-1.262 1.596 1.596 0 0 0 .302-2.523L12.88 15.81a5.62 5.62 0 0 1-1.92-4.098m10.406 1.305H15.5a.982.982 0 0 0-.69 1.682l4.162 4.12a1.36 1.36 0 0 0 2.07-.205 9.7 9.7 0 0 0 1.662-4.087 1.336 1.336 0 0 0-1.338-1.51"
    />
  </svg>
);
export default SvgChartPie4;
