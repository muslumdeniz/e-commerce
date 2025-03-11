import * as React from "react";
import type { SVGProps } from "react";
const SvgSetting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.26a4.8 4.8 0 0 1-2.41-.64L4.88 18.9a4.84 4.84 0 0 1-2.42-4.18V9.28A4.84 4.84 0 0 1 4.88 5.1l4.71-2.72a4.82 4.82 0 0 1 4.82 0l4.71 2.72a4.84 4.84 0 0 1 2.42 4.18v5.44a4.84 4.84 0 0 1-2.42 4.18l-4.71 2.72a4.8 4.8 0 0 1-2.41.64m0-19a3.25 3.25 0 0 0-1.66.44L5.63 6.4A3.33 3.33 0 0 0 4 9.28v5.44a3.33 3.33 0 0 0 1.63 2.88l4.71 2.72a3.33 3.33 0 0 0 3.32 0l4.71-2.72A3.33 3.33 0 0 0 20 14.72V9.28a3.33 3.33 0 0 0-1.63-2.88l-4.71-2.72A3.25 3.25 0 0 0 12 3.24z"
    />
    <path
      fill={props.color}
      d="M12 16.08a4.08 4.08 0 1 1 0-8.16 4.08 4.08 0 0 1 0 8.16m0-6.66A2.58 2.58 0 1 0 14.58 12 2.59 2.59 0 0 0 12 9.42"
    />
  </svg>
);
export default SvgSetting;
