import * as React from "react";
import type { SVGProps } from "react";
const SvgIllustrator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m10.293 10.097.882 2.656H9.12zm12.48 6.203a6.45 6.45 0 0 1-6.374 6.45H7.67a6.45 6.45 0 0 1-6.45-6.375V7.7a6.45 6.45 0 0 1 6.321-6.45h8.729a6.45 6.45 0 0 1 6.45 6.375zm-8.728 0-2.881-8.686a.78.78 0 0 0-.72-.548.8.8 0 0 0-.775.473L5.81 16.225a.805.805 0 1 0 1.473.645l1.075-2.505h3.311l.806 2.44a.81.81 0 0 0 .764.549.7.7 0 0 0 .257 0 .805.805 0 0 0 .549-1.054m3.816-5.622a.806.806 0 0 0-1.613 0v5.88a.806.806 0 1 0 1.613 0zm.258-2.795a1.075 1.075 0 1 0-.079.404q.08-.2.079-.415z"
    />
  </svg>
);
export default SvgIllustrator;
