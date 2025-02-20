import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.914 16.13.859-1.1a1.035 1.035 0 0 0-.859-1.651H16.08v-.815a.826.826 0 1 0-1.65 0v8.806H7.603a3.49 3.49 0 0 1-3.577-3.379 3.48 3.48 0 0 1 3.577-3.39h1.652a2.41 2.41 0 1 0 0-4.81h-1.85l1.3-1.476a4.403 4.403 0 1 0-6.605 0l2.454 2.752a1.1 1.1 0 0 0 .77.364H9.18a.78.78 0 0 1 .825.748.79.79 0 0 1-.825.76H7.604a5.14 5.14 0 0 0-5.228 5.03 5.14 5.14 0 0 0 5.228 5.03h7.706a.814.814 0 0 0 .825-.825v-3.302h5.78a1.035 1.035 0 0 0 .803-1.685zM3.784 5.388a1.651 1.651 0 1 1 3.303-.02 1.651 1.651 0 0 1-3.302.02"
    />
  </svg>
);
export default SvgRoute;
