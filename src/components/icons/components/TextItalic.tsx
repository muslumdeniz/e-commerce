import * as React from "react";
import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.354 1.25H7.7a6.45 6.45 0 0 0-6.45 6.396v8.708A6.45 6.45 0 0 0 7.7 22.75h8.708a6.45 6.45 0 0 0 6.342-6.396V7.646a6.45 6.45 0 0 0-6.396-6.396m-.85 6.697h-1.967l-1.44 8.74h1.87a.806.806 0 1 1 0 1.612h-5.31a.806.806 0 1 1 0-1.612h1.806l1.44-8.74h-1.709a.806.806 0 1 1 0-1.612h5.31a.806.806 0 0 1 0 1.612"
    />
  </svg>
);
export default SvgTextItalic;
