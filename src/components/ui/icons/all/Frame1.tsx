import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21 18.25h-1.48v-6.58a2.43 2.43 0 0 0-2.43-2.42h-2.15a2.42 2.42 0 0 0-2.42 2.42v6.58H11V6.67a2.43 2.43 0 0 0-2.41-2.42H6.44A2.42 2.42 0 0 0 4 6.67v11.58H3a.75.75 0 1 0 0 1.5h18a.75.75 0 0 0 0-1.5m-15.52 0V6.67a.92.92 0 0 1 .92-.92h2.19a.93.93 0 0 1 .93.92v11.58zm8.5 0v-6.58a.92.92 0 0 1 .92-.92h2.15a.93.93 0 0 1 .93.92v6.58z"
    />
  </svg>
);
export default SvgFrame1;
