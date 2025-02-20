import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 8.836c-.137 8.144-7.384 11.604-9.927 12.564a2.1 2.1 0 0 1-1.624-.053C8.699 20.207 1.146 16.22 1.25 8.92A6.414 6.414 0 0 1 6.02 2.696a6.85 6.85 0 0 1 5.507.865.88.88 0 0 0 .96 0 6.87 6.87 0 0 1 5.992-.707 6.47 6.47 0 0 1 4.272 5.982"
    />
  </svg>
);
export default SvgHeart;
