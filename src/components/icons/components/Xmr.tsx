import * as React from "react";
import type { SVGProps } from "react";
const SvgXmr = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.75.75a11 11 0 1 0 0 22 11 11 0 0 0 0-22m-.55 13.607a.825.825 0 0 1-1.65 0v-2.112l-2.981-1.716v3.828a.825.825 0 0 1-1.65 0V9.099a.83.83 0 0 1 .418-.649.79.79 0 0 1 .825 0l4.62 2.662a.83.83 0 0 1 .418.715zm7.381 0a.825.825 0 0 1-1.65 0v-3.784l-2.981 1.705v2.123a.825.825 0 0 1-1.65 0v-2.596a.83.83 0 0 1 .418-.715l4.62-2.64a.79.79 0 0 1 .825 0 .83.83 0 0 1 .418.715z"
    />
  </svg>
);
export default SvgXmr;
