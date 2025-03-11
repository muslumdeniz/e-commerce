import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75a4.14 4.14 0 0 1-2.63-.94l-4.59-3.75a4.12 4.12 0 0 1-1.52-3.21V7.5a4.15 4.15 0 0 1 2.42-3.77l4.59-2.1a4.1 4.1 0 0 1 3.46 0l4.59 2.1a4.15 4.15 0 0 1 2.42 3.77v7.35a4.12 4.12 0 0 1-1.52 3.21l-4.59 3.75a4.14 4.14 0 0 1-2.63.94m0-20a2.6 2.6 0 0 0-1.1.25L6.31 5.09A2.66 2.66 0 0 0 4.76 7.5v7.35a2.62 2.62 0 0 0 1 2l4.59 3.75a2.66 2.66 0 0 0 3.36 0l4.59-3.75a2.62 2.62 0 0 0 1-2V7.5a2.66 2.66 0 0 0-1.55-2.41L13.1 3a2.6 2.6 0 0 0-1.1-.25m-.8 11.82 4.18-4.07a.75.75 0 0 0-1.06-1.06L10.69 13l-1-1a.75.75 0 1 0-1.08 1l1.53 1.57a.76.76 0 0 0 .54.23.74.74 0 0 0 .52-.23"
    />
  </svg>
);
export default SvgShieldTick;
