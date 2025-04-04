import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m18.32 3.73-4.59-2.1a4.1 4.1 0 0 0-3.46 0l-4.59 2.1A4.15 4.15 0 0 0 3.26 7.5v7.35a4.12 4.12 0 0 0 1.52 3.21l4.59 3.75a4.15 4.15 0 0 0 5.26 0l4.59-3.75a4.12 4.12 0 0 0 1.52-3.21V7.5a4.15 4.15 0 0 0-2.42-3.77m.92 11.12a2.62 2.62 0 0 1-1 2l-4.59 3.75a2.66 2.66 0 0 1-3.36 0l-4.56-3.7a2.62 2.62 0 0 1-1-2V7.5a2.66 2.66 0 0 1 1.58-2.41L10.9 3a2.64 2.64 0 0 1 2.2 0l4.59 2.1a2.66 2.66 0 0 1 1.55 2.4zm-4.72-4.27L13.07 12l1.45 1.42a.75.75 0 0 1-.54 1.28.73.73 0 0 1-.52-.21L12 13.05l-1.46 1.44a.77.77 0 0 1-1.07-.01.75.75 0 0 1 0-1.06L10.93 12l-1.45-1.42a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0L12 11l1.47-1.44a.75.75 0 1 1 1 1.07z"
    />
  </svg>
);
export default SvgShieldCross;
