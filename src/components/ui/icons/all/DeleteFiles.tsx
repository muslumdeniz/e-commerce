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
      d="M22.89 10.49a.6.6 0 0 0 0-.14.77.77 0 0 0-.19-.71l-8-8a1 1 0 0 0-.22-.15h-.07a.7.7 0 0 0-.2 0H7.73a6.83 6.83 0 0 0-6.65 6.42v4.89a.75.75 0 1 0 1.5 0V8a5.33 5.33 0 0 1 5.15-5.08h5.66v4a4 4 0 0 0 4 4h4v5.29a4.87 4.87 0 0 1-4.86 4.87H10a.75.75 0 1 0 0 1.5h6.56a6.37 6.37 0 0 0 6.36-6.37zm-5.46-1.07a2.54 2.54 0 0 1-2.54-2.53V4l5.44 5.44zM6.12 19.55h-4a.76.76 0 0 1-.75-.76.75.75 0 0 1 .74-.79h4a.76.76 0 0 1 .75.76.75.75 0 0 1-.74.79"
    />
  </svg>
);
export default SvgDeleteFiles;
