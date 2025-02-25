import * as React from "react";
import type { SVGProps } from "react";
const SvgGooglePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m2.661 22.005-.41.2a.333.333 0 0 1-.5-.3V2.05a.33.33 0 0 1 .155-.29.4.4 0 0 1 .189 0h.155l.411.223 10 10.011zM15.994 8.657l-8.633-4.35 6.478 6.575zm-2.166 4.527L7.36 19.68l8.644-4.349zm8.233-.867a.31.31 0 0 0 .189-.3.33.33 0 0 0-.19-.312L17.618 9.48l-2.59 2.514 2.512 2.58z"
    />
  </svg>
);
export default SvgGooglePlay;
