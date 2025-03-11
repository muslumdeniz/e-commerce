import * as React from "react";
import type { SVGProps } from "react";
const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.39 9.85a2.09 2.09 0 0 0 0-2.95L17.1 2.61A2.07 2.07 0 0 0 15.62 2a2.05 2.05 0 0 0-1.47.61L8.38 8.38l-5.77 5.77a2.09 2.09 0 0 0 0 3l4.29 4.24a2.07 2.07 0 0 0 1.48.61h11.89a.75.75 0 1 0 0-1.5h-9.52l4.87-4.87zm-6.18-6.18a.57.57 0 0 1 .41-.17.6.6 0 0 1 .42.17L20.33 8a.59.59 0 0 1 0 .83L15.09 14 10 8.91zM3.67 16a.59.59 0 0 1 0-.83L8.91 10 14 15.09l-5.21 5.24a.57.57 0 0 1-.41.17.6.6 0 0 1-.38-.17z"
    />
  </svg>
);
export default SvgEraser;
