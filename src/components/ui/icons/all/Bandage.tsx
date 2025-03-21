import * as React from "react";
import type { SVGProps } from "react";
const SvgBandage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.77 22.75a2.25 2.25 0 0 1-1.1-.28 12.94 12.94 0 0 1-5.12-5.15 2.27 2.27 0 0 1 .36-2.73L14.59 1.91a2.27 2.27 0 0 1 2.79-.33 14.56 14.56 0 0 1 5.05 5 2.27 2.27 0 0 1-.34 2.76L9.37 22.09a2.26 2.26 0 0 1-1.6.66m-.38-1.6a.77.77 0 0 0 .92-.15L21 8.31a.77.77 0 0 0 .11-.94 13 13 0 0 0-4.54-4.5.77.77 0 0 0-1 .1L3 15.65a.8.8 0 0 0-.12.94 11.45 11.45 0 0 0 4.54 4.56zm8.54-9.53a1 1 0 1 1-1.397-1.429 1 1 0 0 1 1.397 1.429m-2.14-3.57a1 1 0 1 0-1.398 1.43 1 1 0 0 0 1.398-1.43m0 4.28a1 1 0 1 0-1.398 1.43 1 1 0 0 0 1.398-1.43m-2.14-2.14a1 1 0 1 0-1.398 1.43 1 1 0 0 0 1.398-1.43m0 4.28a1 1 0 1 0-1.398 1.43 1 1 0 0 0 1.398-1.43m-2.14-2.14a1 1 0 1 0-1.398 1.43 1 1 0 0 0 1.398-1.43"
    />
  </svg>
);
export default SvgBandage;
