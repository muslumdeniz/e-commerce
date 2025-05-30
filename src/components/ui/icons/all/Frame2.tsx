import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.75 15.32V5.81a2.56 2.56 0 0 0-2.56-2.56H8.68a2.55 2.55 0 0 0-2.49-2h-.38A2.56 2.56 0 0 0 3.3 3.3a2.56 2.56 0 0 0-2 2.51v.38a2.55 2.55 0 0 0 2 2.49v9.51a2.56 2.56 0 0 0 2.56 2.56h9.51a2.55 2.55 0 0 0 2.49 2h.38a2.56 2.56 0 0 0 2.46-2.05 2.56 2.56 0 0 0 2.05-2.51v-.38a2.55 2.55 0 0 0-2-2.49M3.25 7.09a1.06 1.06 0 0 1-.5-.9v-.38a1.06 1.06 0 0 1 .5-.9zm12 12.16H5.81a1.05 1.05 0 0 1-1.06-1.06V3.81a1.05 1.05 0 0 1 1.06-1.06h.38a1.05 1.05 0 0 1 1.06 1.06v11.38a1.56 1.56 0 0 0 1.56 1.56h6.44zm0-4-6.5-.05V8.76l6.5.05zm4 5a1.05 1.05 0 0 1-1.06 1.06h-.38a1.05 1.05 0 0 1-1.06-1.06V8.81a1.56 1.56 0 0 0-1.56-1.56H8.75v-2.5h9.44a1.05 1.05 0 0 1 1.06 1.06zm2-2a1.05 1.05 0 0 1-.5.88v-2.2a1.05 1.05 0 0 1 .5.88z"
    />
  </svg>
);
export default SvgFrame2;
