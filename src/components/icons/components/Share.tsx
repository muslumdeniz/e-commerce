import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.067 23a10 10 0 0 1-4.202-.913.847.847 0 0 1-.407-1.1.836.836 0 0 1 1.1-.407 8.47 8.47 0 0 0 6.842.077.836.836 0 0 1 .67 1.529 10 10 0 0 1-4.003.814m9.25-10.175a.823.823 0 0 0 .738-.913 10.08 10.08 0 0 0-3.96-6.996.836.836 0 0 0-1.001 1.331 8.43 8.43 0 0 1 3.3 5.83.836.836 0 0 0 .825.748zm-17.599-.748a8.4 8.4 0 0 1 3.443-5.918.836.836 0 1 0-.979-1.342 10.07 10.07 0 0 0-4.07 7.084.825.825 0 0 0 .737.913h.088a.836.836 0 0 0 .792-.737zM12.012 1a3.2 3.2 0 1 0 3.2 3.201A3.19 3.19 0 0 0 12.013 1m-7.7 13.2A3.2 3.2 0 1 0 4.29 20.6a3.2 3.2 0 0 0 .022-6.401m15.4 0a3.201 3.201 0 1 0 3.2 3.2 3.19 3.19 0 0 0-3.2-3.2"
    />
  </svg>
);
export default SvgShare;
