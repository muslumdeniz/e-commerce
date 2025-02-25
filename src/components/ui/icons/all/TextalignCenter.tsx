import * as React from "react";
import type { SVGProps } from "react";
const SvgTextalignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.64 4.555H2.327a.828.828 0 1 1 0-1.655h19.311a.828.828 0 1 1 0 1.655m-3.554 4.69a.84.84 0 0 0-.828-.827H6.708a.828.828 0 1 0 0 1.655h10.55a.84.84 0 0 0 .828-.828m4.414 5.518a.83.83 0 0 0-.828-.828H2.328a.828.828 0 0 0 0 1.655h19.311a.83.83 0 0 0 .828-.827zm-4.414 5.517a.84.84 0 0 0-.828-.827H6.708a.828.828 0 0 0 0 1.655h10.55a.84.84 0 0 0 .828-.828"
    />
  </svg>
);
export default SvgTextalignCenter;
