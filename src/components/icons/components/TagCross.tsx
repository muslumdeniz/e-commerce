import * as React from "react";
import type { SVGProps } from "react";
const SvgTagCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.421 2.94H9.528A4.57 4.57 0 0 0 6.09 4.488L2.138 8.913a4.58 4.58 0 0 0 .066 6.116l4.205 4.546a4.6 4.6 0 0 0 3.415 1.482h8.641A4.58 4.58 0 0 0 23 16.478v-8.96a4.58 4.58 0 0 0-4.579-4.578M16.83 13.92a.823.823 0 0 1 0 1.164.77.77 0 0 1-.57.241.84.84 0 0 1-.594-.252l-1.954-2.01-1.965 2.01a.813.813 0 0 1-1.164 0 .824.824 0 0 1 0-1.164l1.987-2.031-2.02-2.076a.824.824 0 0 1 1.164-1.163l1.965 1.998 1.965-1.933a.823.823 0 0 1 1.186 1.098l-1.987 2.043z"
    />
  </svg>
);
export default SvgTagCross;
