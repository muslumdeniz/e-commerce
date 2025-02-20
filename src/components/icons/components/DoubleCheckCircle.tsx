import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m-3.157 9.57a.99.99 0 0 1 1.276-.099l-1.386 1.397a1.01 1.01 0 0 1 .11-1.298m-.506 5.698c-.268 0-.525-.107-.715-.297l-4.07-4.103a1.023 1.023 0 0 1 1.441-1.441l3.3 3.3 5.39-5.39a1.015 1.015 0 0 1 1.43 1.441l-6.05 6.182a1.02 1.02 0 0 1-.726.308m6.006-.176a1.01 1.01 0 0 1-1.43 0l-1.21-1.21 1.441-1.441.484.495 5.379-5.368a1.024 1.024 0 1 1 1.441 1.441z"
    />
  </svg>
);
export default SvgDoubleCheckCircle;
