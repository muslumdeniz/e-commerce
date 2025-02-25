import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M1.2 7.513v9.007a4.32 4.32 0 0 0 4.32 4.32h7.01V3.15H5.52A4.32 4.32 0 0 0 1.2 7.513m7.474 3.424a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16m-2.765 1.08a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0m16.89-4.504v9.007a4.32 4.32 0 0 1-4.32 4.32h-2.623v1.08a.81.81 0 0 1-1.62 0V2.07a.81.81 0 1 1 1.62 0v1.08h2.624a4.32 4.32 0 0 1 4.32 4.363"
    />
  </svg>
);
export default SvgPasswordCheck;
