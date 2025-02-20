import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.14 5.666h-3.22a2.86 2.86 0 0 1-2.642-1.753l-.361-.91A2.85 2.85 0 0 0 8.276 1.25H6.084A4.953 4.953 0 0 0 1.12 6.16v10.958a5.72 5.72 0 0 0 5.72 5.632h10.3a5.72 5.72 0 0 0 5.743-5.687v-5.731a5.71 5.71 0 0 0-5.742-5.666m-2.684 9.863a.8.8 0 0 1-.57.24.73.73 0 0 1-.526-.219l-1.238-1.15-1.096 1.238a.8.8 0 0 1-.57.241.78.78 0 0 1-.767-.789.8.8 0 0 1 .198-.482l1.161-1.227-1.315-1.195a.78.78 0 0 1 0-1.095.79.79 0 0 1 1.096 0l1.238 1.161 1.162-1.227a.79.79 0 0 1 1.096-.22.757.757 0 0 1 .23 1.096.7.7 0 0 1-.176.187l-1.172 1.227 1.238 1.173a.756.756 0 0 1 .011 1.019z"
    />
  </svg>
);
export default SvgDeleteFolder;
