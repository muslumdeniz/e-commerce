import * as React from "react";
import type { SVGProps } from "react";
const SvgFatrows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.5 15.413v5.25a1.84 1.84 0 0 1-1.837 1.837H3.338A1.837 1.837 0 0 1 1.5 20.663v-5.25a1.84 1.84 0 0 1 1.838-1.838h17.325a1.84 1.84 0 0 1 1.837 1.838M13.313 1.5H3.338A1.837 1.837 0 0 0 1.5 3.338v5.25a1.84 1.84 0 0 0 1.838 1.837h9.974a1.84 1.84 0 0 0 1.838-1.838v-5.25A1.837 1.837 0 0 0 13.312 1.5"
    />
  </svg>
);
export default SvgFatrows;
