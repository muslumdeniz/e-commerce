import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.609 22.378a10.5 10.5 0 1 1 4.2-19.131 1.406 1.406 0 0 1 .22 2.1l-.955 1.05a1.42 1.42 0 0 1-1.806.22 6.3 6.3 0 0 0-5.25-.588 6.3 6.3 0 1 0 7.875 8.075h-4.274a1.43 1.43 0 0 1-1.428-1.428V11.31a1.43 1.43 0 0 1 1.428-1.407h7.434a1.43 1.43 0 0 1 1.428 1.417v.42c0 4.956-3.969 9.901-8.872 10.637"
    />
  </svg>
);
export default SvgGoogle;
