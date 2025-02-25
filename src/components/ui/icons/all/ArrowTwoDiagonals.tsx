import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowTwoDiagonals = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.25 5.31 10.94 12l-6.69 6.69V15a.75.75 0 0 0-1.5 0v5.5c0 .414.336.75.75.75H9a.75.75 0 0 0 0-1.5H5.31L12 13.06l6.69 6.69H15a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-1.5 0v3.69L13.06 12l6.69-6.69V9a.75.75 0 0 0 1.5 0V3.5a.75.75 0 0 0-.75-.75H15a.75.75 0 0 0 0 1.5h3.69L12 10.94 5.31 4.25H9a.75.75 0 0 0 0-1.5H3.5a.75.75 0 0 0-.75.75V9a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowTwoDiagonals;
