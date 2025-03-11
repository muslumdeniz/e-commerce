import * as React from "react";
import type { SVGProps } from "react";
const SvgMask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.72A10.72 10.72 0 1 1 22.72 12 10.73 10.73 0 0 1 12 22.72m0-19.94A9.22 9.22 0 1 0 21.22 12 9.24 9.24 0 0 0 12 2.78m-1.68 16.29c-.316 0-.628-.062-.92-.18a7.45 7.45 0 0 1 0-13.78 2.37 2.37 0 0 1 2.23.22 2.41 2.41 0 0 1 1.07 2v9.32a2.41 2.41 0 0 1-1.07 2 2.5 2.5 0 0 1-1.31.42m0-12.64a1 1 0 0 0-.33.06 6 6 0 0 0 0 11 .85.85 0 0 0 .83-.08.9.9 0 0 0 .41-.76V7.34a.9.9 0 0 0-.41-.76.9.9 0 0 0-.5-.15"
    />
  </svg>
);
export default SvgMask;
