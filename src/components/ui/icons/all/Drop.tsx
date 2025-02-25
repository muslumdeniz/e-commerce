import * as React from "react";
import type { SVGProps } from "react";
const SvgDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M6.04 18.408a.795.795 0 0 1-1.053.144.76.76 0 0 1-.25-.287A7.75 7.75 0 0 1 4 14.985C4 11.774 8.485 5 10.746 1.862a1.5 1.5 0 0 1 .539-.45 1.55 1.55 0 0 1 1.381 0 1.5 1.5 0 0 1 .538.45 93 93 0 0 1 2.753 4.115.74.74 0 0 1 0 .871zm.983 1.67a.75.75 0 0 0-.168.574.74.74 0 0 0 .315.511A8.02 8.02 0 0 0 12 22.75a8.2 8.2 0 0 0 3.063-.588 8 8 0 0 0 2.597-1.683 7.7 7.7 0 0 0 1.734-2.521A7.6 7.6 0 0 0 20 14.984a15 15 0 0 0-2.175-5.964.8.8 0 0 0-.247-.248.79.79 0 0 0-.982.117z"
    />
  </svg>
);
export default SvgDrop;
