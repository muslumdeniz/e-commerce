import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M19.207 2.793a1 1 0 1 0-1.414 1.414L19.086 5.5H15.5a1 1 0 0 0-.771.363l-4.026 4.874-4.463-4.91A1 1 0 0 0 5.5 5.5h-3a1 1 0 0 0 0 2h2.558l4.358 4.794L5.53 17H2.5a1 1 0 1 0 0 2H6a1 1 0 0 0 .771-.363l9.2-11.137h3.115l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414zM12.59 13.892A1 1 0 0 1 14 14l2.961 3h2.126l-.793-.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l.793-.793H16.5a1 1 0 0 1-.76-.35l-3.259-3.348a1 1 0 0 1 .108-1.41"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowMix;
