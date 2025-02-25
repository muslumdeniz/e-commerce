import * as React from "react";
import type { SVGProps } from "react";
const SvgTextalignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.618 4.553H2.327a.827.827 0 0 1 0-1.653h19.291a.827.827 0 1 1 0 1.653m-7.937 4.685a.827.827 0 0 0-.827-.826H2.327a.827.827 0 0 0 0 1.653h10.527a.827.827 0 0 0 .827-.827M22.5 14.75a.826.826 0 0 0-.827-.826H2.327a.827.827 0 1 0 0 1.653h19.291a.826.826 0 0 0 .827-.827zm-8.764 5.512a.827.827 0 0 0-.827-.827H2.327a.827.827 0 1 0 0 1.654h10.527a.826.826 0 0 0 .827-.827z"
    />
  </svg>
);
export default SvgTextalignLeft;
