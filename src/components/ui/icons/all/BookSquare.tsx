import * as React from "react";
import type { SVGProps } from "react";
const SvgBookSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.375 1.25H6.625A5.375 5.375 0 0 0 1.25 6.625v10.75a5.375 5.375 0 0 0 5.375 5.375h10.75a5.375 5.375 0 0 0 5.375-5.375V6.625a5.375 5.375 0 0 0-5.375-5.375m-5.912 17.093a19.3 19.3 0 0 0-5.268-1.774 1.204 1.204 0 0 1-1.075-1.204V6.84a1.236 1.236 0 0 1 1.44-1.226c1.716.269 3.367.852 4.87 1.72zm7.396-2.967a1.225 1.225 0 0 1-1 1.214 17.6 17.6 0 0 0-5.3 1.742V7.345a14.8 14.8 0 0 1 4.816-1.795 1.247 1.247 0 0 1 1.451 1.215z"
    />
  </svg>
);
export default SvgBookSquare;
