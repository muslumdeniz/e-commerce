import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M4.675 19.324c.435.435 1.14.435 1.575 0L17.422 8.152V16.6a1.114 1.114 0 0 0 2.227 0V5.464c0-.615-.498-1.114-1.114-1.114H7.4a1.114 1.114 0 1 0 0 2.227h8.448L4.675 17.75a1.114 1.114 0 0 0 0 1.575"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRight;
