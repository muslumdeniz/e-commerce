import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m15.927 17.171-3.945 3.945a6.433 6.433 0 1 1-9.098-9.098L6.83 8.073zm5.154-14.285a6.43 6.43 0 0 0-9.099 0L8.038 6.864l9.098 9.098 3.945-3.944a6.426 6.426 0 0 0 0-9.099z"
    />
  </svg>
);
export default SvgCapsule;
