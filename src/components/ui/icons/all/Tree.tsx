import * as React from "react";
import type { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m19.53 15.83-3.26-4.54h.13a1.77 1.77 0 0 0 1.44-2.81l-4.4-6.11A1.75 1.75 0 0 0 12 1.63a1.77 1.77 0 0 0-1.44.73l-4.4 6.12a1.77 1.77 0 0 0 1.44 2.81h.13l-3.26 4.54a2.1 2.1 0 0 0 1.7 3.33h5.08v2.46a.75.75 0 1 0 1.5 0v-2.46h5.08a2.1 2.1 0 0 0 1.7-3.33M7.35 9.64a.27.27 0 0 1 0-.28l4.4-6.12a.26.26 0 0 1 .25-.11.26.26 0 0 1 .22.11l4.4 6.12a.27.27 0 0 1 0 .28.26.26 0 0 1-.25.15H7.6a.26.26 0 0 1-.25-.15m11 7.69a.58.58 0 0 1-.53.33H6.17a.58.58 0 0 1-.53-.33.6.6 0 0 1 0-.63l3.9-5.41h4.84l3.9 5.41a.6.6 0 0 1 .08.63z"
    />
  </svg>
);
export default SvgTree;
