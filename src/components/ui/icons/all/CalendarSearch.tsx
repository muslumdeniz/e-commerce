import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 19.79a4.4 4.4 0 0 0 2.53-.8l.54.56a.73.73 0 0 0 .54.22.77.77 0 0 0 .52-.21.75.75 0 0 0 0-1.06l-.55-.57A4.4 4.4 0 1 0 12 19.79m0-7.31a2.91 2.91 0 1 1 .02 5.82 2.91 2.91 0 0 1-.02-5.82m5.54-9V1.94a.7.7 0 0 0-1.39 0v1.27h-3.26V1.94a.7.7 0 0 0-1.4 0v1.25H7.85V1.94a.7.7 0 0 0-1.39 0v1.49A6.17 6.17 0 0 0 2 9.35v7.24a6.18 6.18 0 0 0 6.19 6.16h7.66A6.18 6.18 0 0 0 22 16.59V9.35a6.17 6.17 0 0 0-4.46-5.92zM6.46 4.9v.81a.7.7 0 0 0 1.39 0v-1.1h3.64v1.1a.7.7 0 0 0 1.4 0V4.58h3.26v1.1a.7.7 0 0 0 1.39 0V4.9a4.79 4.79 0 0 1 3 3.75H3.44A4.79 4.79 0 0 1 6.46 4.9m14.17 11.69a4.79 4.79 0 0 1-4.8 4.77H8.17a4.79 4.79 0 0 1-4.8-4.77V10h17.26z"
    />
  </svg>
);
export default SvgCalendarSearch;
