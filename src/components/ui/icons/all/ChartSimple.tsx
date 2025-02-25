import * as React from "react";
import type { SVGProps } from "react";
const SvgChartSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.6 23H2.4a.82.82 0 1 1 0-1.64h19.2a.82.82 0 1 1 0 1.64m-1.945-4.57V6.98a1.28 1.28 0 0 0-1.28-1.29h-1.093a1.28 1.28 0 0 0-1.28 1.29V18.43a1.28 1.28 0 0 0 1.28 1.28h1.093a1.28 1.28 0 0 0 1.28-1.28m-6.244-.132V2.421A1.42 1.42 0 0 0 12.001 1h-.799a1.42 1.42 0 0 0-1.421 1.421v15.877a1.42 1.42 0 0 0 1.421 1.41h.799a1.41 1.41 0 0 0 1.366-1.41zm-6.244.131v-6.057a1.29 1.29 0 0 0-1.29-1.29H4.784a1.29 1.29 0 0 0-1.29 1.29v6.057a1.28 1.28 0 0 0 1.29 1.28h1.093a1.28 1.28 0 0 0 1.247-1.28z"
    />
  </svg>
);
export default SvgChartSimple;
