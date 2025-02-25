import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperPlane = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.295 1.422 2.48 7.732a1.84 1.84 0 0 0-.235 3.368l5.422 2.866a1.43 1.43 0 0 0 1.636-.224l6.245-5.85a.76.76 0 0 1 1.07-.139.78.78 0 0 1 .138 1.07 1 1 0 0 1-.192.17l-6.192 5.829a1.44 1.44 0 0 0-.289 1.721l2.738 5.144a1.84 1.84 0 0 0 2.47.791c.406-.216.717-.574.877-1.005l6.47-17.698a1.84 1.84 0 0 0-1.07-2.353 1.86 1.86 0 0 0-1.272 0"
    />
  </svg>
);
export default SvgPaperPlane;
