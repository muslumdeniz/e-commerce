import * as React from "react";
import type { SVGProps } from "react";
const SvgHappyemoji = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.76 10.76 0 0 1 12 22.75m0-20A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75m4.38 14.08a.74.74 0 0 0 .19-1 .73.73 0 0 0-1-.19 6.38 6.38 0 0 1-7.06 0 .74.74 0 0 0-1 .18.76.76 0 0 0 .18 1 8.87 8.87 0 0 0 4.56 1.34 7.27 7.27 0 0 0 4.13-1.33"
    />
  </svg>
);
export default SvgHappyemoji;
