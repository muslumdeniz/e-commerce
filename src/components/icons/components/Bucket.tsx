import * as React from "react";
import type { SVGProps } from "react";
const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="m10.456 2.49 7.414 7.414c.16.173.263.39.296.621h.003a1.15 1.15 0 0 1-.3.944l-6.389 6.39a3.64 3.64 0 0 1-5.135 0L2.5 14.014a3.6 3.6 0 0 1-.828-1.289A3.64 3.64 0 0 1 2.5 8.88l6.01-6.01-.979-.99a.83.83 0 0 1 0-1.15.84.84 0 0 1 1.152 0l1.715 1.76zM2.386 23.5h14.217a.84.84 0 0 0 0-1.68H2.385a.84.84 0 0 0 0 1.68m20.18-4.985a2.636 2.636 0 1 1-5.272 0 6.98 6.98 0 0 1 1.68-3.8 1.22 1.22 0 0 1 1.935 0 6.78 6.78 0 0 1 1.658 3.8"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBucket;
