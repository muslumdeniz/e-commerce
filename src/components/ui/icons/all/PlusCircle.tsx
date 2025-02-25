import * as React from "react";
import type { SVGProps } from "react";
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m5.5 12.1h-4.4v4.4a1.1 1.1 0 0 1-2.2 0v-4.4H6.5a1.1 1.1 0 0 1 0-2.2h4.4V6.5a1.1 1.1 0 0 1 2.2 0v4.4h4.4a1.1 1.1 0 0 1 0 2.2"
    />
  </svg>
);
export default SvgPlusCircle;
