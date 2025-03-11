import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.69 22.75a4.12 4.12 0 0 1-2.63-.94l-4.59-3.75A4.12 4.12 0 0 1 3 14.85V7.5a4.15 4.15 0 0 1 2.37-3.77L10 1.63a4.08 4.08 0 0 1 3.45 0L18 3.73a4.15 4.15 0 0 1 2.43 3.77v7.35a4.15 4.15 0 0 1-1.52 3.21l-4.6 3.75a4.1 4.1 0 0 1-2.62.94m0-20a2.7 2.7 0 0 0-1.11.25L6 5.09A2.65 2.65 0 0 0 4.45 7.5v7.35a2.62 2.62 0 0 0 1 2l4.55 3.8a2.65 2.65 0 0 0 3.35 0L18 16.9a2.62 2.62 0 0 0 1-2V7.5a2.66 2.66 0 0 0-1.55-2.41L12.79 3a2.7 2.7 0 0 0-1.1-.25"
    />
  </svg>
);
export default SvgShield;
