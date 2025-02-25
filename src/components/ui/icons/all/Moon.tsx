import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.426 15.805a1.554 1.554 0 0 1 1.381 2.482 11 11 0 0 1-2.32 2.374A11.105 11.105 0 1 1 8.857 1.345a1.554 1.554 0 0 1 1.997 1.985 9.098 9.098 0 0 0 9.572 12.475"
    />
  </svg>
);
export default SvgMoon;
