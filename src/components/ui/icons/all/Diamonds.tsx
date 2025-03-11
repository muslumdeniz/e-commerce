import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.5 2.75h.28c.316.049.615.176.87.37q.18.131.33.3.096.106.17.23.081.118.14.25L21 10a2.48 2.48 0 0 1-.41 2.69l-7.09 7.89a2.08 2.08 0 0 1-3.06 0l-7.06-7.91A2.48 2.48 0 0 1 3 10l2.71-6.07c0-.09.25-.41.31-.49a1.6 1.6 0 0 1 .42-.37 1.9 1.9 0 0 1 1.06-.32zm0-1.5h-9a3.4 3.4 0 0 0-1.88.56 3.3 3.3 0 0 0-.74.65 6 6 0 0 0-.47.75l-2.73 6a4 4 0 0 0 .66 4.32l7.09 7.89a3.57 3.57 0 0 0 5.28 0l7.09-7.88a4 4 0 0 0 .67-4.31l-2.82-5.92a2.7 2.7 0 0 0-.24-.45l-.21-.37a2.47 2.47 0 0 0-2.14-1.24z"
    />
  </svg>
);
export default SvgDiamonds;
