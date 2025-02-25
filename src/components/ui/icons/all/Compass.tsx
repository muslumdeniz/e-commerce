import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22M7.468 18.05a1.178 1.178 0 0 1-1.518-1.518l2.684-6.985 5.643 5.885zM18.05 7.468l-2.607 6.787-5.5-5.764 6.6-2.541a1.177 1.177 0 0 1 1.507 1.518"
    />
  </svg>
);
export default SvgCompass;
