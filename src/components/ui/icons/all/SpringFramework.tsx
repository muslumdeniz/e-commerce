import * as React from "react";
import type { SVGProps } from "react";
const SvgSpringFramework = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 11.646a11 11 0 0 0-3.146-7.348l.319-.429a.88.88 0 0 1 1.54.21A21.2 21.2 0 0 1 23 11.645m0 0c-.231 4.642-3.014 9.064-13.343 7.81a.32.32 0 0 1 0-.627c2.761-.78 8.217-3.025 9.9-8.888a12.86 12.86 0 0 1-13.662 7.612 1.46 1.46 0 0 1-1.232-1.155c-.517-2.2-1.001-7.392 5.06-8.239s8.481-1.793 10.131-3.86a11 11 0 1 0 3.146 7.7z"
    />
  </svg>
);
export default SvgSpringFramework;
