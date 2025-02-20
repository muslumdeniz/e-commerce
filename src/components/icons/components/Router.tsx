import * as React from "react";
import type { SVGProps } from "react";
const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 14.154v5.423a2.2 2.2 0 0 1-2.2 2.2 1.1 1.1 0 0 1-2.2 0H5.4a1.1 1.1 0 0 1-2.2 0 2.2 2.2 0 0 1-2.2-2.2v-5.423a2.2 2.2 0 0 1 2.2-2.2h17.6a2.2 2.2 0 0 1 2.2 2.2M5.4 16.277a1.1 1.1 0 1 0 0 2.201 1.1 1.1 0 0 0 0-2.2m4.4 0a1.1 1.1 0 1 0 0 2.201 1.1 1.1 0 0 0 0-2.2m4.4 0a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2m4.235-4.323V1.955a.825.825 0 1 0-1.65 0v9.999z"
    />
  </svg>
);
export default SvgRouter;
