import * as React from "react";
import type { SVGProps } from "react";
const SvgAdditem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.704 16.5H4.125A3.375 3.375 0 0 1 .75 13.125v-9A3.375 3.375 0 0 1 4.125.75h6.176a3.375 3.375 0 0 1 3.375 3.375v1.699a5.03 5.03 0 0 0-4.972 5.051zm14.546-5.625v9a3.375 3.375 0 0 1-3.375 3.375h-6.142a3.375 3.375 0 0 1-3.376-3.375v-9A3.375 3.375 0 0 1 13.734 7.5h6.142a3.375 3.375 0 0 1 3.375 3.375m-3.51 4.5a.844.844 0 0 0-.844-.844h-.99v-.99a.844.844 0 1 0-1.687 0v.99h-.99a.844.844 0 0 0 0 1.688h.99v.99a.844.844 0 1 0 1.687 0v-.99h.99a.844.844 0 0 0 .844-.844"
    />
  </svg>
);
export default SvgAdditem;
