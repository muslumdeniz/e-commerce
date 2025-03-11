import * as React from "react";
import type { SVGProps } from "react";
const SvgElementEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.47 11.25h-5A2.52 2.52 0 0 1 1 8.73v-5a2.52 2.52 0 0 1 2.52-2.48h5A2.52 2.52 0 0 1 11 3.77v5a2.52 2.52 0 0 1-2.53 2.48m-5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM20 11.25h-5a2.52 2.52 0 0 1-2.5-2.52v-5A2.52 2.52 0 0 1 15 1.25h5a2.52 2.52 0 0 1 2.52 2.52v5A2.52 2.52 0 0 1 20 11.25m-5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-6.55 20h-5A2.52 2.52 0 0 1 1 20.23v-5a2.52 2.52 0 0 1 2.52-2.52h5A2.52 2.52 0 0 1 11 15.27v5a2.52 2.52 0 0 1-2.53 2.48zm-5-8.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm18.29 5.42a.76.76 0 0 0-.75-.75H14a.75.75 0 1 0 0 1.5h7a.75.75 0 0 0 .74-.75m0-3.84a.75.75 0 0 0-.75-.75H14a.75.75 0 1 0 0 1.5h7a.76.76 0 0 0 .74-.75"
    />
  </svg>
);
export default SvgElementEqual;
