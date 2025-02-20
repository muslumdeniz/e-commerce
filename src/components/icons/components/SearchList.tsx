import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M17.966 9.044H21.6v11.18a2.526 2.526 0 0 1-2.559 2.526H4.958A2.525 2.525 0 0 1 2.4 20.224V3.776A2.526 2.526 0 0 1 4.958 1.25h8.859v3.655a4.15 4.15 0 0 0 4.15 4.139m-1.628 9.916q.152-.066.263-.188a.807.807 0 0 0-.033-1.107l-2.236-2.15a4.16 4.16 0 0 0 .785-2.44 4.225 4.225 0 1 0-1.956 3.58l2.3 2.15a.8.8 0 0 0 .56.215.75.75 0 0 0 .317-.06M17.966 7.43h3.085L15.43 1.734v3.225a2.537 2.537 0 0 0 2.537 2.472m-7.041 3.021a2.623 2.623 0 1 0 2.58 2.623 2.634 2.634 0 0 0-2.58-2.623"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearchList;
