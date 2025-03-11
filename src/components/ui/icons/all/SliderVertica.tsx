import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.28 20.15H5.72A3.73 3.73 0 0 1 2 16.43V7.57a3.73 3.73 0 0 1 3.72-3.72h12.56A3.73 3.73 0 0 1 22 7.57v8.86a3.73 3.73 0 0 1-3.72 3.72M5.72 5.35A2.23 2.23 0 0 0 3.5 7.57v8.86a2.23 2.23 0 0 0 2.22 2.22h12.56a2.23 2.23 0 0 0 2.22-2.22V7.57a2.23 2.23 0 0 0-2.22-2.22zM19.49 2a.76.76 0 0 0-.75-.75H5.26a.75.75 0 0 0 0 1.5h13.48a.76.76 0 0 0 .75-.75m0 20a.76.76 0 0 0-.75-.75H5.26a.75.75 0 1 0 0 1.5h13.48a.76.76 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgSliderVertica;
