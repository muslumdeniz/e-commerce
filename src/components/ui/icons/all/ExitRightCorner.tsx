import * as React from "react";
import type { SVGProps } from "react";
const SvgExitRightCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m13.463 11.655 6.404-6.394c.45.67.69 1.458.69 2.264v11.182a4.044 4.044 0 0 1-4.032 4.043H5.343A4.043 4.043 0 0 1 1.3 18.707V7.525a4.033 4.033 0 0 1 4.043-4.032h11.182a4 4 0 0 1 2.156.636l-6.362 6.383a.81.81 0 1 0 1.143 1.143m9.23-9.553a.82.82 0 0 0-.82-.852h-4.486a.85.85 0 0 0-.571.237.82.82 0 0 0 .571 1.423h2.523L18.692 4.13c.457.28.856.647 1.175 1.078l1.197-1.197v2.631a.82.82 0 0 0 1.628 0z"
    />
  </svg>
);
export default SvgExitRightCorner;
