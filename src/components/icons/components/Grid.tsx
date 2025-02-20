import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.19 2H9v20H7.19A5.19 5.19 0 0 1 2 16.81V7.19q0-.505.1-1 .027-.096.06-.19a5 5 0 0 1 .2-.64q.04-.13.1-.25a4.6 4.6 0 0 1 .43-.79 5.3 5.3 0 0 1 .56-.69l.13-.13a6 6 0 0 1 .67-.56l.12-.07a5 5 0 0 1 .71-.38l.13-.07a6 6 0 0 1 .85-.26h.19A6 6 0 0 1 7.18 2zm9.62 0H10.5v20h6.31A5.19 5.19 0 0 0 22 16.81V7.19A5.19 5.19 0 0 0 16.81 2"
    />
  </svg>
);
export default SvgGrid;
