import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m15.653 13.545 6.018 1.9a1.583 1.583 0 0 1 .065 3.048l-1.714.622a1.5 1.5 0 0 0-.929.94l-.633 1.714a1.584 1.584 0 0 1-3.003 0l-1.879-6.138a1.649 1.649 0 0 1 2.075-2.086m-3.636 2.523a3.28 3.28 0 0 1 .491-2.905 3.28 3.28 0 0 1 2.61-1.343c.338 0 .674.056.994.164l4.565 1.441v-7.24a5.025 5.025 0 0 0-5.035-5.035H6.185A5.035 5.035 0 0 0 1.15 6.185v9.48a5.046 5.046 0 0 0 5.035 5.012h7.24z"
    />
  </svg>
);
export default SvgMouseSquare;
