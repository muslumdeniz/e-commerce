import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.677 21.509h1.645a1.075 1.075 0 0 0 .731-1.742l-2.333-2.332a1.076 1.076 0 0 0-1.44 0l-2.333 2.332a1.075 1.075 0 0 0 .731 1.742h1.645m8.202-6.149a3.225 3.225 0 0 0 0-6.45h-.204c.13-.343.2-.707.204-1.075A3.225 3.225 0 0 0 16.3 4.61a3.23 3.23 0 0 0-1.806.559A5.375 5.375 0 0 0 4.475 7.835q.005.541.107 1.075h-.107a3.225 3.225 0 1 0 0 6.45z"
    />
  </svg>
);
export default SvgCloudAdd;
