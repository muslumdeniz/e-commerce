import * as React from "react";
import type { SVGProps } from "react";
const SvgMagnifier = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.955 19.783 18.6 16.648a9.467 9.467 0 1 0-2.257 2.153l3.448 3.27a1.64 1.64 0 0 0 1.045.429 1.51 1.51 0 0 0 1.14-.502 1.557 1.557 0 0 0-.021-2.215M11.013 17.61a6.687 6.687 0 1 1 6.698-6.698 6.7 6.7 0 0 1-6.698 6.698"
    />
  </svg>
);
export default SvgMagnifier;
