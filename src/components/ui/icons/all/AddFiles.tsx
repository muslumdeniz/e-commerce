import * as React from "react";
import type { SVGProps } from "react";
const SvgAddFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.72 10.49a.6.6 0 0 0 0-.14.76.76 0 0 0-.18-.71l-7.88-8a.8.8 0 0 0-.21-.15h-.07a.7.7 0 0 0-.19 0H7.8a6.78 6.78 0 0 0-6.55 6.42v4.89a.74.74 0 1 0 1.48 0V8A5.29 5.29 0 0 1 7.8 2.92h5.57v4a4 4 0 0 0 4 4h3.91v5.29a4.83 4.83 0 0 1-4.79 4.87H10a.75.75 0 1 0 0 1.5h6.44a6.33 6.33 0 0 0 6.27-6.37zm-5.38-1.07a2.52 2.52 0 0 1-2.49-2.53V4l5.35 5.42zm-10 9.28a.74.74 0 0 1-.73.74H5.38v1.21a.75.75 0 0 1-.74.75.74.74 0 0 1-.73-.75v-1.24H2.7a.73.73 0 0 1-.7-.77.76.76 0 0 1 .74-.74h1.2v-1.2a.74.74 0 0 1 .71-.7.74.74 0 0 1 .73.75v1.22h1.21a.75.75 0 0 1 .73.73z"
    />
  </svg>
);
export default SvgAddFiles;
