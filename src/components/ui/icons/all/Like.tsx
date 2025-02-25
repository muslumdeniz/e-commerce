import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.613 9.2H16.3a1.27 1.27 0 0 1-1.24-1.526l.551-3.178a2.373 2.373 0 0 0-4.322-1.727L7.052 9.126V7.844a1.685 1.685 0 0 0-1.643-1.685H3.185A1.685 1.685 0 0 0 1.5 7.844v11.4a1.685 1.685 0 0 0 1.685 1.684h2.224a1.685 1.685 0 0 0 1.685-1.684v.159l2.808 2.246c.62.436 1.36.666 2.119.656h5.36a2.405 2.405 0 0 0 2.289-1.684l2.744-8.984A1.875 1.875 0 0 0 20.613 9.2"
    />
  </svg>
);
export default SvgLike;
