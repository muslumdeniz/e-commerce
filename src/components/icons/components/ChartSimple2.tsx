import * as React from "react";
import type { SVGProps } from "react";
const SvgChartSimple2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.513 23H2.483a.813.813 0 1 1 0-1.626h19.03a.813.813 0 1 1 0 1.626m-8.247-4.497V6.983a1.28 1.28 0 0 0-1.268-1.28h-1.084a1.28 1.28 0 0 0-1.246 1.28v11.52a1.28 1.28 0 0 0 1.246 1.235h1.084a1.28 1.28 0 0 0 1.268-1.235m6.167-.13V2.408A1.41 1.41 0 0 0 18.023 1h-.769a1.41 1.41 0 0 0-1.409 1.409v15.92a1.41 1.41 0 0 0 1.41 1.409h.769a1.41 1.41 0 0 0 1.409-1.409zm-12.29.13v-6.124a1.28 1.28 0 0 0-1.279-1.278H4.78a1.28 1.28 0 0 0-1.235 1.278v6.124a1.28 1.28 0 0 0 1.279 1.278h1.083a1.28 1.28 0 0 0 1.236-1.278"
    />
  </svg>
);
export default SvgChartSimple2;
