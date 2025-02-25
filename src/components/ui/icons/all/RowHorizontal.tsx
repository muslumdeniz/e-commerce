import * as React from "react";
import type { SVGProps } from "react";
const SvgRowHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.663 10.425H3.338A1.84 1.84 0 0 1 1.5 8.587v-5.25A1.837 1.837 0 0 1 3.338 1.5h17.325A1.84 1.84 0 0 1 22.5 3.338v5.25a1.84 1.84 0 0 1-1.837 1.837M22.5 20.663v-5.25a1.84 1.84 0 0 0-1.837-1.838H3.338A1.837 1.837 0 0 0 1.5 15.413v5.25A1.84 1.84 0 0 0 3.338 22.5h17.325a1.84 1.84 0 0 0 1.837-1.837"
    />
  </svg>
);
export default SvgRowHorizontal;
