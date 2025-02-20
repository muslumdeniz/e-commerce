import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M19.324 4.676c.435.435.435 1.14 0 1.575L8.152 17.423H16.6a1.114 1.114 0 1 1 0 2.227H5.464a1.114 1.114 0 0 1-1.114-1.114V7.4a1.114 1.114 0 1 1 2.227 0v8.448L17.75 4.676a1.114 1.114 0 0 1 1.575 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDownLeft;
