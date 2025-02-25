import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.037 7.76-6.11-5.308a4.486 4.486 0 0 0-5.843 0l-6.12 5.307a4.66 4.66 0 0 0-1.594 3.535v8.884a2.44 2.44 0 0 0 2.412 2.442h3.612a2.434 2.434 0 0 0 2.476-2.442v-4.585a2.26 2.26 0 0 1 1.806-2.25 2.127 2.127 0 0 1 2.529 2.122v4.713a2.43 2.43 0 0 0 2.39 2.442h3.613a2.444 2.444 0 0 0 2.412-2.442v-8.895a4.68 4.68 0 0 0-1.583-3.524"
    />
  </svg>
);
export default SvgHome;
