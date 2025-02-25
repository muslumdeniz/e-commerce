import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.061 1.5H6.939A5.44 5.44 0 0 0 1.5 6.939V21.45a1.05 1.05 0 0 0 1.05 1.05h14.49a5.44 5.44 0 0 0 5.46-5.439V6.939A5.44 5.44 0 0 0 17.061 1.5m-1.449 11.288H8.388a.787.787 0 0 1 0-1.575h7.224a.788.788 0 0 1 0 1.575"
    />
  </svg>
);
export default SvgMessageMinus;
