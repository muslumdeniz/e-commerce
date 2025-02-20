import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M6.25 5.1v-.862A3.726 3.726 0 0 1 9.988.5h4.024a3.726 3.726 0 0 1 3.738 3.738V5.1zm11.5 9.488H6.25a.863.863 0 0 0 0 1.725H7.4v3.645a3.54 3.54 0 0 0 3.542 3.542h2.116a3.54 3.54 0 0 0 3.542-3.542v-3.645h1.15a.863.863 0 0 0 0-1.725m4.6-5.118v6.21a3.22 3.22 0 0 1-3.22 3.22h-1.38v-1.437a2.013 2.013 0 1 0 0-4.026H6.25a2.012 2.012 0 1 0 0 4.025V18.9H4.87a3.23 3.23 0 0 1-3.22-3.22V9.47a3.23 3.23 0 0 1 3.22-3.22h14.26a3.22 3.22 0 0 1 3.22 3.22m-11.788 1.38a.874.874 0 0 0-.862-.862H6.25a.863.863 0 0 0 0 1.725H9.7a.874.874 0 0 0 .863-.863"
    />
  </svg>
);
export default SvgPrinter;
