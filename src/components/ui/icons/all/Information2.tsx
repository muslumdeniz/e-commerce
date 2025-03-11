import * as React from "react";
import type { SVGProps } from "react";
const SvgInformation2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75"
    />
    <path
      fill={props.color}
      d="M12 10.6a1 1 0 0 1 1 1v4.66a1 1 0 0 1-2 0V11.6a1 1 0 0 1 1-1M12 9.24a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgInformation2;
