import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.074 5.658h-3.15a2.82 2.82 0 0 1-2.601-1.763l-.398-.903a2.77 2.77 0 0 0-2.59-1.742h-2.15A4.924 4.924 0 0 0 1.25 6.163v10.922a5.665 5.665 0 0 0 5.676 5.665h10.148a5.665 5.665 0 0 0 5.676-5.665v-5.751a5.664 5.664 0 0 0-5.676-5.676m-4.3 9.986a1.61 1.61 0 0 1-1.849 0c-.914-.602-2.15-1.612-2.15-2.752a1.774 1.774 0 0 1 1.57-1.967 1.56 1.56 0 0 1 1.343.828.183.183 0 0 0 .247.086.17.17 0 0 0 .086-.086 1.56 1.56 0 0 1 1.377-.828 1.75 1.75 0 0 1 1.623 1.881c0 1.075-1.301 2.183-2.226 2.838z"
    />
  </svg>
);
export default SvgLikeFolder;
