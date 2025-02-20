import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderAdded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.112 5.671H13.87a2.82 2.82 0 0 1-2.615-1.751l-.336-.908A2.83 2.83 0 0 0 8.303 1.25H6.14A4.94 4.94 0 0 0 1.19 6.136v10.939a5.686 5.686 0 0 0 5.664 5.675h10.258a5.687 5.687 0 0 0 5.697-5.675v-5.729a5.686 5.686 0 0 0-5.697-5.675m-8.56 8.345a.78.78 0 0 1 .075-1.081.79.79 0 0 1 1.08.076l1.795 2.162 2.767-3.6a.766.766 0 0 1 1.372.362.77.77 0 0 1-.15.568l-3.373 4.323a.79.79 0 0 1-.583.314.8.8 0 0 1-.595-.281l-2.389-2.886z"
    />
  </svg>
);
export default SvgFolderAdded;
