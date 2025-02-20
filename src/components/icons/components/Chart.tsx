import * as React from "react";
import type { SVGProps } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.109 2.265a1.33 1.33 0 0 1 1.63-1.33 11.2 11.2 0 0 1 8.349 10.876c.003 1-.131 1.997-.4 2.96a1.353 1.353 0 0 1-1.984.832l-1.807-1.053a.964.964 0 0 1-.455-1.109 6.73 6.73 0 0 0-4.668-8.139c-.4-.11-.665-.498-.665-1.174zm4.679 14.226a.93.93 0 0 0-1.109.133 6.586 6.586 0 0 1-9.314 0 .93.93 0 0 0-1.109-.133L4.45 17.599a1.364 1.364 0 0 0-.366 2.118 10.954 10.954 0 0 0 15.834 0 1.363 1.363 0 0 0-.322-2.107zm-14.492-.887a1.352 1.352 0 0 1-1.985-.832 11 11 0 0 1-.399-2.96A11.2 11.2 0 0 1 9.262.933a1.33 1.33 0 0 1 1.63 1.33v2.13a.95.95 0 0 1-.666.931 6.73 6.73 0 0 0-4.879 6.486 7 7 0 0 0 .211 1.675.965.965 0 0 1-.455 1.108z"
    />
  </svg>
);
export default SvgChart;
