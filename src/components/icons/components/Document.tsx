import * as React from "react";
import type { SVGProps } from "react";
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 12h-5.074a5.28 5.28 0 0 1-5.138-5.375V1.25H7.259A6.095 6.095 0 0 0 1.25 7.388v9.224a6.095 6.095 0 0 0 6.042 6.138h9.481a6.085 6.085 0 0 0 5.977-6.138zm-14.953.29h3.397a.828.828 0 0 1 0 1.645H7.797a.827.827 0 0 1 0-1.645m7.804 6.042h-8.03a.828.828 0 0 1 0-1.634h8.03a.85.85 0 0 1 .678.956.84.84 0 0 1-.678.624zm7.15-8.03h-5.075a3.633 3.633 0 0 1-3.526-3.677 1 1 0 0 0 0-.15v-5.16z"
    />
  </svg>
);
export default SvgDocument;
