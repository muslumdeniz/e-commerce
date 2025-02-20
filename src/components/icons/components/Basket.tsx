import * as React from "react";
import type { SVGProps } from "react";
const SvgBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 7.188a2.29 2.29 0 0 1-2.226 2.356H3.476a2.29 2.29 0 0 1-2.225-2.356 2.29 2.29 0 0 1 2.225-2.355h1.516l2.02-3.226a.806.806 0 0 1 1.075-.247.817.817 0 0 1 .248 1.129l-1.43 2.344H17.04L15.58 2.5a.83.83 0 0 1 .237-1.076.806.806 0 0 1 1.075.247l2.031 3.227h1.57a2.29 2.29 0 0 1 2.257 2.29m-19.016 3.99h16.554l-1.269 8.496a3.58 3.58 0 0 1-3.472 3.076H8.55a3.58 3.58 0 0 1-3.462-3.044zm9.964 6.528a.807.807 0 1 0 1.613 0V13.77a.807.807 0 1 0-1.613 0zm-5.009 0a.807.807 0 1 0 1.613 0V13.77a.807.807 0 1 0-1.613 0z"
    />
  </svg>
);
export default SvgBasket;
