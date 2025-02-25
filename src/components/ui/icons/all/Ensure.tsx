import * as React from "react";
import type { SVGProps } from "react";
const SvgEnsure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.8 7.911v8.996a4.32 4.32 0 0 1-4.32 4.32h-2.625v.67a.81.81 0 0 1-1.62 0V2.09a.81.81 0 1 1 1.62 0v1.458h2.625a4.32 4.32 0 0 1 4.32 4.363M5.52 3.591h7.01v17.68H5.52a4.32 4.32 0 0 1-4.32-4.32V7.91a4.32 4.32 0 0 1 4.32-4.363zm.432 12.744a.81.81 0 0 0 1.62 0v-8.64a.81.81 0 0 0-1.62 0z"
    />
  </svg>
);
export default SvgEnsure;
