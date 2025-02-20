import * as React from "react";
import type { SVGProps } from "react";
const SvgPriceTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.19 8.286-5.352-5.35a5.8 5.8 0 0 0-4.248-1.684l-5.804.198a4.457 4.457 0 0 0-4.34 4.34L1.282 11.7a5.68 5.68 0 0 0 1.683 4.213l5.293 5.305a5.225 5.225 0 0 0 7.393 0l5.537-5.537a5.223 5.223 0 0 0 0-7.394m-14.3 3.03a3.25 3.25 0 1 1 4.642 0 3.26 3.26 0 0 1-4.643 0m10.829 1.636-4.643 4.643a.83.83 0 0 1-.615.256.86.86 0 0 1-.616-.256.87.87 0 0 1 0-1.23l4.643-4.643a.87.87 0 0 1 1.23 0 .86.86 0 0 1 0 1.23"
    />
  </svg>
);
export default SvgPriceTag;
