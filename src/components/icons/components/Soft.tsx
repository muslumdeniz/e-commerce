import * as React from "react";
import type { SVGProps } from "react";
const SvgSoft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.953 11.615h-2.816a1.584 1.584 0 0 1 1.463-1.353 1.57 1.57 0 0 1 1.353 1.353M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0M11.571 7.6A5.181 5.181 0 1 0 8.7 17.225a5.24 5.24 0 0 0 2.409-.594.554.554 0 0 0-.517-.979 4 4 0 0 1-1.892.473 4.092 4.092 0 1 1 2.2-7.524.55.55 0 0 0 .594-.924zM8.7 10.24A1.804 1.804 0 1 0 10.504 12 1.793 1.793 0 0 0 8.7 10.24m6.677-.869a.55.55 0 0 0-.77-.099l-.847.66v-.22a.55.55 0 1 0-1.1 0v4.895a.55.55 0 1 0 1.1 0v-3.3l1.54-1.166a.55.55 0 0 0 .077-.77m1.749 3.3h3.443a.55.55 0 0 0 .55-.55A2.816 2.816 0 0 0 18.6 9.162a2.816 2.816 0 0 0-2.574 3.003 2.684 2.684 0 0 0 2.574 2.992h1.573a.55.55 0 0 0 0-1.1H18.6a1.474 1.474 0 0 1-1.474-1.342z"
    />
  </svg>
);
export default SvgSoft;
