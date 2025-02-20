import * as React from "react";
import type { SVGProps } from "react";
const SvgInformation1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m-1.1 6.314a1.1 1.1 0 0 1 2.2 0v5.126a1.1 1.1 0 0 1-2.2 0zM12 17.786a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75"
    />
  </svg>
);
export default SvgInformation1;
