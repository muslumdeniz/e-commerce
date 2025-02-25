import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m9.447 22.377-5.45-4.218a3.86 3.86 0 0 1-1.102-1.319A3.65 3.65 0 0 1 2.5 15.2V6.934c0-.734.225-1.453.646-2.07a3.97 3.97 0 0 1 1.729-1.405l5.463-2.363a4.22 4.22 0 0 1 3.348 0l5.439 2.363c.707.3 1.308.789 1.729 1.406s.646 1.335.646 2.07V15.2c0 .566-.133 1.126-.39 1.637-.256.512-.63.963-1.094 1.321l-5.451 4.218a4.15 4.15 0 0 1-2.56.873c-.933 0-1.838-.309-2.558-.873"
    />
  </svg>
);
export default SvgShield;
