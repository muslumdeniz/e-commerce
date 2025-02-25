import * as React from "react";
import type { SVGProps } from "react";
const SvgAddFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.074 5.679h-3.171a2.82 2.82 0 0 1-2.613-1.763l-.365-.903a2.795 2.795 0 0 0-2.59-1.763h-2.15A4.923 4.923 0 0 0 1.25 6.174v10.954a5.676 5.676 0 0 0 5.676 5.622h10.148a5.676 5.676 0 0 0 5.676-5.622v-5.773a5.664 5.664 0 0 0-5.676-5.676m-2.623 8.6h-1.666v1.645a.763.763 0 0 1-.742.785.763.763 0 0 1-.763-.742v-1.71H9.56a.763.763 0 1 1 0-1.526h1.655v-1.655a.765.765 0 0 1 .742-.785.74.74 0 0 1 .785.742v1.709h1.72a.763.763 0 1 1 0 1.526z"
    />
  </svg>
);
export default SvgAddFolder;
