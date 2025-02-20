import * as React from "react";
import type { SVGProps } from "react";
const SvgPad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.412 1H6.588A3.39 3.39 0 0 0 3.2 4.388v15.224A3.39 3.39 0 0 0 6.588 23h10.824a3.39 3.39 0 0 0 3.388-3.388V4.388A3.39 3.39 0 0 0 17.412 1M12 20.03a1.925 1.925 0 1 1 0-3.85 1.925 1.925 0 0 1 0 3.85m2.134-14.3H9.866a.825.825 0 0 1 0-1.65h4.268a.825.825 0 1 1 0 1.65"
    />
  </svg>
);
export default SvgPad;
