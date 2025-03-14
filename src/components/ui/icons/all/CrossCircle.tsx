import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 2.65a9.35 9.35 0 1 1 0 18.7 9.35 9.35 0 0 1 0-18.7m0 8L9.36 8A1 1 0 0 0 8 8a1 1 0 0 0 0 1.36L10.68 12 8 14.64A1 1 0 0 0 8 16a1 1 0 0 0 1.33 0L12 13.32 14.64 16A1 1 0 0 0 16 16a1 1 0 0 0 0-1.33L13.32 12 16 9.36A1 1 0 0 0 16 8a1 1 0 0 0-1.33 0L12 10.68m0-9.43A10.75 10.75 0 1 0 22.75 12 10.76 10.76 0 0 0 12 1.25"
    />
  </svg>
);
export default SvgCrossCircle;
