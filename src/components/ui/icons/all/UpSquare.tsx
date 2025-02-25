import * as React from "react";
import type { SVGProps } from "react";
const SvgUpSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M1.25 7.808v8.385a6.57 6.57 0 0 0 6.558 6.557h8.385a6.57 6.57 0 0 0 6.557-6.558V7.808a6.57 6.57 0 0 0-6.558-6.558H7.808A6.57 6.57 0 0 0 1.25 7.808m11.363 1.075 3.687 3.483a.999.999 0 0 1-.661 1.725 1 1 0 0 1-.715-.274L12 11.01l-2.849 2.924A1 1 0 0 1 7.7 12.559l3.494-3.655a1 1 0 0 1 1.419-.032z"
    />
  </svg>
);
export default SvgUpSquare;
