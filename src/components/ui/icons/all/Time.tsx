import * as React from "react";
import type { SVGProps } from "react";
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1.25a10.75 10.75 0 1 0 0 21.5 10.75 10.75 0 0 0 0-21.5m4.3 11.546H12a.817.817 0 0 1-.817-.817V5.937a.817.817 0 0 1 1.634 0v5.246H16.3a.817.817 0 0 1 0 1.634z"
    />
  </svg>
);
export default SvgTime;
