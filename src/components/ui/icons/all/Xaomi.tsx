import * as React from "react";
import type { SVGProps } from "react";
const SvgXaomi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m-.748 14.135a.825.825 0 0 1-1.65 0V12a.825.825 0 0 1 1.65 0zm3.3 0a.825.825 0 0 1-1.65 0v-3.3A2.11 2.11 0 0 0 10.9 9.69H7.908v5.445a.825.825 0 0 1-1.65 0v-6.27a.825.825 0 0 1 .825-.825H10.9a3.75 3.75 0 0 1 3.751 3.751zm3.146 0a.825.825 0 0 1-1.65 0v-6.27a.825.825 0 1 1 1.65 0z"
    />
  </svg>
);
export default SvgXaomi;
