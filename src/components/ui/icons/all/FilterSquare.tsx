import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.455 1H7.6A6.6 6.6 0 0 0 1 7.6v8.91A6.6 6.6 0 0 0 7.6 23h8.91A6.6 6.6 0 0 0 23 16.455V7.6A6.6 6.6 0 0 0 16.455 1M17.5 8.535a1.42 1.42 0 0 1-.473 1.1L14.31 12a2.52 2.52 0 0 0-.825 1.848v2.695a1.22 1.22 0 0 1-.517 1.012l-.88.616a1.31 1.31 0 0 1-2.057-1.1v-3.3A2.43 2.43 0 0 0 9.316 12L6.907 9.591A1.43 1.43 0 0 1 6.5 8.59V6.995a1.42 1.42 0 0 1 1.419-1.419h8.162A1.42 1.42 0 0 1 17.5 6.995z"
    />
  </svg>
);
export default SvgFilterSquare;
