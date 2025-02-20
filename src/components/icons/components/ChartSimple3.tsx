import * as React from "react";
import type { SVGProps } from "react";
const SvgChartSimple3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.542 23H2.455a.815.815 0 0 1 0-1.63h19.087a.815.815 0 1 1 0 1.63m-10.565-3.26h1.022a1.28 1.28 0 0 0 1.304-1.218V6.989A1.283 1.283 0 0 0 12 5.707h-1.033a1.283 1.283 0 0 0-1.272 1.282v11.533a1.283 1.283 0 0 0 1.283 1.239zm-6.022 0h.783a1.413 1.413 0 0 0 1.413-1.414V2.413A1.413 1.413 0 0 0 5.738 1h-.783a1.413 1.413 0 0 0-1.413 1.413v15.935a1.413 1.413 0 0 0 1.413 1.413zm12.163 0h1.087a1.283 1.283 0 0 0 1.24-1.218v-6.12a1.284 1.284 0 0 0-1.283-1.293h-1.087a1.28 1.28 0 0 0-1.283 1.293v6.12a1.283 1.283 0 0 0 1.326 1.239z"
    />
  </svg>
);
export default SvgChartSimple3;
