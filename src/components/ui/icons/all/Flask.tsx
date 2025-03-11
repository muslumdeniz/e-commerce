import * as React from "react";
import type { SVGProps } from "react";
const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.45 18.07-3.15-5.44-2.55-4.42V4.58A1.75 1.75 0 0 0 15 1.25H9a1.75 1.75 0 0 0-.75 3.33v3.63L5.7 12.63l-3.15 5.44a3.12 3.12 0 0 0 2.7 4.68h13.5a3.12 3.12 0 0 0 2.7-4.68M9.65 8.78a.7.7 0 0 0 .1-.37V4A.76.76 0 0 0 9 3.25a.25.25 0 1 1 0-.5h6a.25.25 0 0 1 0 .5.76.76 0 0 0-.75.75v4.41a.7.7 0 0 0 .1.37l2 3.47h-8.7zm10.5 11.66a1.6 1.6 0 0 1-1.4.81H5.25a1.62 1.62 0 0 1-1.4-2.43l2.93-5.07h10.44l2.93 5.07a1.62 1.62 0 0 1 0 1.62"
    />
  </svg>
);
export default SvgFlask;
