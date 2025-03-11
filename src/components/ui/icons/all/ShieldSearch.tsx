import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.75 22.76h-.05a4 4 0 0 1-2.36-.93l-4.6-3.75a4.14 4.14 0 0 1-1.52-3.22V7.51a4.16 4.16 0 0 1 2.42-3.78l4.6-2.1a4.1 4.1 0 0 1 3.46 0l4.59 2.1a4.16 4.16 0 0 1 2.43 3.78v2.62a.75.75 0 0 1-1.5 0V7.51a2.67 2.67 0 0 0-1.55-2.42L12.07 3a2.66 2.66 0 0 0-2.21 0L5.27 5.09a2.67 2.67 0 0 0-1.55 2.42v7.35a2.65 2.65 0 0 0 1 2.06l4.6 3.75c.43.351.957.561 1.51.6a.75.75 0 0 1-.05 1.49zm9.59-6.45a5.06 5.06 0 1 0-5.06 5.07 5.07 5.07 0 0 0 5.06-5.07m-1.5 0a3.56 3.56 0 1 1-7.12 0 3.56 3.56 0 0 1 7.12 0m1.23 3.83a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    />
  </svg>
);
export default SvgShieldSearch;
