import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.71 22.75H8.29a4.15 4.15 0 0 1-4.15-4.15V5.4a4.15 4.15 0 0 1 4.15-4.15h7.42a4.15 4.15 0 0 1 4.15 4.15v13.2a4.15 4.15 0 0 1-4.15 4.15m-7.42-20A2.65 2.65 0 0 0 5.64 5.4v13.2a2.65 2.65 0 0 0 2.65 2.65h7.42a2.65 2.65 0 0 0 2.65-2.65V5.4a2.65 2.65 0 0 0-2.65-2.65zM12 6.3a1.37 1.37 0 1 0 1.37 1.36A1.36 1.36 0 0 0 12 6.3m0 12.4a3.64 3.64 0 1 1 3.64-3.64A3.65 3.65 0 0 1 12 18.7m0-5.78a2.14 2.14 0 1 0 0 4.28 2.14 2.14 0 0 0 0-4.28"
    />
  </svg>
);
export default SvgSpeaker;
