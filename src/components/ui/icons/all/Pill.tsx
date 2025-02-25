import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.802 19.796a11.034 11.034 0 0 1-15.174.358A10.998 10.998 0 0 1 3.472 5.043L5.05 6.618l11.633 11.626a1.1 1.1 0 0 0 1.565 0 1.1 1.1 0 0 0 0-1.564L5.017 3.47A11.037 11.037 0 0 1 20.15 4.623a11 11 0 0 1-.359 15.15z"
    />
  </svg>
);
export default SvgPill;
