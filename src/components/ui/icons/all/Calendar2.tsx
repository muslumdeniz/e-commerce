import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.73 13a.85.85 0 1 0 .02 1.7.85.85 0 0 0-.02-1.7m3.21 0a.85.85 0 1 0 .02 1.7.85.85 0 0 0-.02-1.7m-3.22 3.2a.85.85 0 1 0 .86.85.85.85 0 0 0-.86-.89zm8.82-12.77V1.94a.7.7 0 0 0-1.39 0v1.27h-3.26V1.94a.7.7 0 0 0-1.4 0v1.25H7.85V1.94a.7.7 0 0 0-1.39 0v1.49A6.17 6.17 0 0 0 2 9.35v7.24a6.18 6.18 0 0 0 6.19 6.16h7.66A6.18 6.18 0 0 0 22 16.59V9.35a6.17 6.17 0 0 0-4.46-5.92M6.46 4.9v.81a.7.7 0 0 0 1.39 0v-1.1h3.64v1.1a.7.7 0 0 0 1.4 0V4.58h3.26v1.1a.7.7 0 0 0 1.39 0V4.9a4.79 4.79 0 0 1 3 3.75H3.44A4.79 4.79 0 0 1 6.46 4.9m14.17 11.69a4.79 4.79 0 0 1-4.8 4.77H8.17a4.79 4.79 0 0 1-4.8-4.77V10h17.26z"
    />
  </svg>
);
export default SvgCalendar2;
