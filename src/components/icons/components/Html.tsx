import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.79 1H5.214a2.75 2.75 0 0 0-2.74 3.036l1.563 14.995a2.73 2.73 0 0 0 1.97 2.355l5.236 1.507a2.74 2.74 0 0 0 1.518 0l5.259-1.508A2.76 2.76 0 0 0 20 19.02l1.53-14.984A2.75 2.75 0 0 0 18.79 1m-2.2 6.084H8.306l.33 3.3 7.404.154a.824.824 0 0 1 .803.891l-.44 5.149a.825.825 0 0 1-.572.715l-3.829 1.232a.7.7 0 0 1-.253 0 .8.8 0 0 1-.231 0l-3.51-1.023a.82.82 0 0 1-.583-.66l-.34-2.046a.825.825 0 1 1 1.617-.286l.253 1.54 2.816.825 3.047-.98.297-3.75L7.877 12a.825.825 0 0 1-.804-.748l-.506-4.906a.836.836 0 0 1 .814-.946h9.242a.825.825 0 1 1 0 1.65z"
    />
  </svg>
);
export default SvgHtml;
