import * as React from "react";
import type { SVGProps } from "react";
const SvgDeliveryDoor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.059 22.75H16.06a1.073 1.073 0 0 1-1.075-1.129v-4.987a1.075 1.075 0 0 1 1.075-1.075h4.999a1.075 1.075 0 0 1 1.075 1.075v5.041a1.075 1.075 0 0 1-1.075 1.075m-7.202-3.225h-6.15a2.086 2.086 0 0 1-2.085-2.15V3.401a2.085 2.085 0 0 1 2.086-2.15h8.04a2.085 2.085 0 0 1 2.15 2.15V14.43H16.06a2.204 2.204 0 0 0-2.15 2.15zm1.075-8.6a.806.806 0 1 0 1.612 0V8.97a.806.806 0 0 0-1.612 0zM13.2 21.89a.817.817 0 0 0-.806-.806H2.666a.806.806 0 0 0 0 1.612h9.75a.817.817 0 0 0 .806-.817z"
    />
  </svg>
);
export default SvgDeliveryDoor;
