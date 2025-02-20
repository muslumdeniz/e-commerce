import * as React from "react";
import type { SVGProps } from "react";
const SvgFileUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 10.346h-5.066a3.606 3.606 0 0 1-3.553-3.638V1.473zm-5.066 1.65h-.137a5.223 5.223 0 0 1-4.981-5.458V1.42H7.278A6.03 6.03 0 0 0 1.25 7.448v9.031a6.03 6.03 0 0 0 6.05 6.092h9.433a6.03 6.03 0 0 0 6.017-6.028v-4.548zm-5.414 2.506a.804.804 0 0 1-1.121.084l-1.703-1.449v5.288a.793.793 0 1 1-1.586 0v-5.372l-1.946 1.554a.794.794 0 1 1-.983-1.247l3.236-2.56a.4.4 0 0 1 .116-.063l.085-.053a.7.7 0 0 1 .581 0l.095.053.127.074 3.004 2.57a.794.794 0 0 1 .095 1.12"
    />
  </svg>
);
export default SvgFileUp;
