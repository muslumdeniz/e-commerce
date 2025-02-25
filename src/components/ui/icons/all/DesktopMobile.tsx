import * as React from "react";
import type { SVGProps } from "react";
const SvgDesktopMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.675 9.313h-6.45a2.15 2.15 0 0 0-2.085 2.15V20.6a2.15 2.15 0 0 0 2.085 2.15h6.45a2.15 2.15 0 0 0 2.075-2.15v-9.17a2.15 2.15 0 0 0-2.075-2.117M17.45 20.955a1.194 1.194 0 1 1 1.172-1.183 1.173 1.173 0 0 1-1.172 1.183m-6.278.462H6.926a.806.806 0 1 1 0-1.613h3.16v-2.827H5.315A4.096 4.096 0 0 1 1.25 12.86V5.335A4.096 4.096 0 0 1 5.314 1.25h11.9a4.096 4.096 0 0 1 4.053 4.117v2.935a3.6 3.6 0 0 0-.592-.064h-6.45a3.225 3.225 0 0 0-3.16 3.225V20.6c.005.275.04.55.107.817m1.075 0a2 2 0 0 1-.107-.376q.065.192.15.376z"
    />
  </svg>
);
export default SvgDesktopMobile;
