import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.19 20.328a1.9 1.9 0 0 1-.606.69l-1.433 1.046a2.091 2.091 0 0 1-3.368-1.736v-5.491a4.03 4.03 0 0 0-1.161-2.825L3.689 8.017a2.3 2.3 0 0 1-.659-1.622V3.791A2.31 2.31 0 0 1 5.342 1.5h13.326a2.31 2.31 0 0 1 2.312 2.312v2.51a2.28 2.28 0 0 1-.774 1.736l-2.344 2.092a5.4 5.4 0 0 0-2.343-.554 5.47 5.47 0 0 0-1.328 10.732m5.974-1.757-.963-.963h-.062a4.446 4.446 0 1 0-1.046 1.046v.063l.962.963a.785.785 0 0 0 1.109 0 .784.784 0 0 0 0-1.088z"
    />
  </svg>
);
export default SvgFilterSearch;
