import * as React from "react";
import type { SVGProps } from "react";
const SvgDeleteFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.94 9.32h-4.72a3.37 3.37 0 0 1-3.29-3.45.6.6 0 0 0 0-.13V1zm0 1.52h-4.72a4.9 4.9 0 0 1-4.78-5V1H8.53a5.65 5.65 0 0 0-5.62 5.62v7.23A5.4 5.4 0 0 1 5 13.41a5.51 5.51 0 0 1 5.5 5.52 5.7 5.7 0 0 1-.32 1.88h7.14A5.65 5.65 0 0 0 23 15.19zM9 19a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.76 0a.75.75 0 0 0-.74-.78h-3a.78.78 0 0 0-.7 1.05.75.75 0 0 0 .69.48h3a.74.74 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgDeleteFiles;
