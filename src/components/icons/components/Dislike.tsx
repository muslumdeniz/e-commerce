import * as React from "react";
import type { SVGProps } from "react";
const SvgDislike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.775 3.076h-2.223A1.683 1.683 0 0 0 16.87 4.76V4.6l-2.773-2.244A3.6 3.6 0 0 0 11.98 1.7H6.614a2.4 2.4 0 0 0-2.286 1.683l-2.741 8.975a1.874 1.874 0 0 0 1.778 2.435h4.308a1.27 1.27 0 0 1 1.238 1.524l-.55 3.175a2.37 2.37 0 0 0 4.318 1.725l4.234-6.35v1.302a1.683 1.683 0 0 0 1.683 1.683h2.222a1.683 1.683 0 0 0 1.683-1.683V4.759a1.68 1.68 0 0 0-1.725-1.683"
    />
  </svg>
);
export default SvgDislike;
