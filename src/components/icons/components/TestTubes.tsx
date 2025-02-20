import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTubes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.845 8.775v10.75a3.225 3.225 0 0 1-6.45 0V8.775zm4.3 5.375v5.375a3.225 3.225 0 0 0 6.45 0V14.15zm0-10.75v9.675h6.45V3.4a1.075 1.075 0 0 0 0-2.15h-6.45a1.075 1.075 0 0 0 0 2.15m-4.3-2.15h-6.45a1.075 1.075 0 1 0 0 2.15v4.3h6.45V3.4a1.075 1.075 0 0 0 0-2.15"
    />
  </svg>
);
export default SvgTestTubes;
